import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
export async function POST(req: NextRequest) {
    try {
        await connectDb();
        const { name, email, password } = await req.json();
        const existUser = await User.findOne({ email })
        if (existUser) {
            return NextResponse.json ({message: "User already exists"}, {status: 400})
        }
        if (password.length < 6) {
            return NextResponse.json ({message: "password must be at least 6 characters"}, {status: 400})
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, email, password: hashedPass
        });
        return NextResponse.json(user, {status: 201})
    } catch (error) {
        return NextResponse.json ({message: `Registration failed: ${error}`}, {status: 500})
    }
    
}
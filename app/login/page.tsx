"use client"
import { ArrowLeft, Leaf, Lock, LogIn, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'motion/react'
import RegisterButton from '@/components/RegisterButton'
import googleImage from '@/assets/google.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const session = useSession()
    console.log(session)
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await signIn("credentials", {
                email, password
            })
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
          <motion.h1
              className='text-4xl font-extrabold text-green-600 mb-2'
              initial={{ y: -10, opacity: 0}}
              animate={{ y:0, opacity: 1}}
              transition={{duration: 0.6}}
          >
              Welcome Back
          </motion.h1>
          <p className='text-gray-600 mb-8 flex items-center'>Login to SnapCart <Leaf className='w-5 h-5 ml-2 text-green-400' /></p>
          <motion.form
              className='flex flex-col gap-5 w-full max-w-sm'
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.6 }}
              onSubmit={handleLogin}
          >

              {/* // Email Input */}
              <div className='relative'>
                  <Mail className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
                  <input
                      type="text"
                      placeholder='Your Email'
                      className='w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-gray-800 focus:ring-1 focus:ring-green-500 focus:outline-none'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                  />
              </div>
              {/* // Password Input */}
              <div className='relative'>
                  <Lock className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
                  <input
                      type="password"
                      placeholder='Set Password'
                      className='w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-gray-800 focus:ring-1 focus:ring-green-500 focus:outline-none'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                  />
              </div>
              {/* Button */}
              {
                   email!=="" && password!=="" ?
                      <RegisterButton text = "Login" customClass={"bg-green-600 hover:bg-green-700 text-white"} /> : 
                      <RegisterButton text = "Login" customClass={"bg-gray-300 text-gray-500 cursor-not-allowed"} />
              }
              <div className='flex items-center gap-2 text-gray-400 text-sm mt-2'>
                  <span className='flex-1 h-px bg-gray-200'></span>
                  OR
                  <span className='flex-1 h-px bg-gray-200'></span>
              </div>
              <div
                  className='w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-lg text-gray-700 font-medium transition-all duration-200'
                    onClick={()=>signIn("google", {callbackUrl: "/"})}
              >
                  <Image src={googleImage} width={40} height={40} alt='google Image' />
                  Contitue With Google
              </div>
              <p className='text-gray-600 mt-6 text-sm flex items-center justify-center gap-1'>Want to create an account <LogIn className='w-4 h-4 cursor-pointer' onClick={() => {}}/> <span className='text-green-600 font-medium cursor-pointer' onClick={()=>router.push("/register")}>Sign Up</span></p>
          </motion.form>
    </div>
  )
}

export default Login
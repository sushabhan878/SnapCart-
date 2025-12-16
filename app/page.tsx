import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
import NavBar from '@/components/Nav'
import connectDb from '@/lib/db'
import User from '@/models/user.model'
import { redirect } from 'next/navigation'

const page = async() => {
      await connectDb()
    const session = await auth ()
    const user = await User.findById(session?.user?.id)
    if (!user) {
        redirect("/login")
    }

    const inCompleteProfile = !user.mobile || !user.role
    if (inCompleteProfile) {
       return <EditRoleMobile/> 
    }
  const planeUser = JSON.parse(JSON.stringify(user))
  return (
    <>
      <NavBar user={ planeUser } />
    </>
  )
}

export default page

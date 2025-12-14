import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
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

    const inCompleteProfile = !user.mobile || !user.role || (!user.mobile && user.role == "user")
    if (inCompleteProfile) {
       return <EditRoleMobile/> 
    }
  return (
    <div>
      Hello
    </div>
  )
}

export default page

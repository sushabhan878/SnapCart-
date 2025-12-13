import { ArrowLeft, Leaf, Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { button } from 'motion/react-client'
import RegisterButton from './RegisterButton'
type propType = {
    previousStep:(step: number) => void
}

const RegisterForm = ({ previousStep }: propType) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [showPassword, setShowPassword] = useState(false)

  return (
      <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
          <div
              className='absolute top-6 left-6 flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors cursor-pointer'
              onClick={() => previousStep(1)}
          >
              <ArrowLeft className='w-5 h-5'/>
              <span className='font-medium'>Back</span>
          </div>
          <motion.h1
              className='text-4xl font-extrabold text-green-600 mb-2'
              initial={{ y: -10, opacity: 0}}
              animate={{ y:0, opacity: 1}}
              transition={{duration: 0.6}}
          >
              Create Account
          </motion.h1>
          <p className='text-gray-600 mb-8 flex items-center'>Join SnapCart Today <Leaf className='w-5 h-5 ml-2 text-green-400' /></p>
          <motion.form
              className='flex flex-col gap-5 w-full max-w-sm'
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{duration: 0.6}}
          >
              {/* // Name Input */}
              <div className='relative'>
                  <User className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
                  <input
                      type="text"
                      placeholder='Your Name'
                      className='w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 text-gray-800 focus:ring-1 focus:ring-green-500 focus:outline-none'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                  />
              </div>

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
                  name!=="" && email!=="" && password!=="" ?
                      <RegisterButton customClass={"bg-green-600 hover:bg-green-700 text-white"} /> : 
                      <RegisterButton customClass={"bg-gray-300 text-gray-500 cursor-not-allowed"} />
              }
          </motion.form>
    </div>
  )
}

export default RegisterForm
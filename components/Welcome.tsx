"use client"
import React from 'react'
import { motion } from "motion/react"
import { ArrowRight, Bike, ShoppingBasket } from 'lucide-react'

const Welcome = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='flex items-center gap-3'
          >
              <ShoppingBasket className='w-12 h-12 text-green-600'/>
              <h1 className='text-4xl md:text-5xl font-extrabold text-green-600'>SnapCart</h1>
          </motion.div>
          <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mt-4 text-gray-400 text-lg md:text-xl max-w-lg'
          >
              Your one step solution to grocery shopping! and delivered in just 10 minutes 🚀
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='flex items-center justify-center mt-6 gap-10'
          >
              <ShoppingBasket className='w-24 h-24 md:h-32 md:w-32 text-green-600 drop-shadow-md' />
              <Bike className='w-24 h-24 md:h-32 md:w-32 text-orange-600'/>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}    
              className='inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200 mt-10'>Get Started <ArrowRight /></motion.button>
    </div>
  )
}

export default Welcome

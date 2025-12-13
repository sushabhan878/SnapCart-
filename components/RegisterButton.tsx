import React from 'react'

type propType = {
    customClass: string
}

const RegisterButton = ({customClass}: propType) => {
  return (
    <div className={`w-ful font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex justify-center items-center gap-2 ${customClass}`}>
      Register
    </div>
  )
}

export default RegisterButton

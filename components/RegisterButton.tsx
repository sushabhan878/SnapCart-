


type propType = {
    customClass: string
}

const RegisterButton = ({ customClass, }: propType) => {
  return (
    <button className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex justify-center items-center gap-2 ${customClass}`}>
      Register Now
    </button>
  )
}

export default RegisterButton

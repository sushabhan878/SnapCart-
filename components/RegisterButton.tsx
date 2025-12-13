


type propType = {
    customClass: string
    text: string
}

const RegisterButton = ({ customClass, text}: propType) => {
  return (
    <button className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex justify-center items-center gap-2 ${customClass}`}>
      {text}
    </button>
  )
}

export default RegisterButton

function Button({operador, fn}) {
  return (
    <button
        type='button'
        className='h-10 w-10 flex item-center justify-center font-bold text-white
        text-2xl bg-lime-500 rounded-full outline-none ring hover:right-4
        hover:ring-offset-2 ring-lime-500'
        onClick={fn}
    >{operador}</button>
  )
}

export default Button
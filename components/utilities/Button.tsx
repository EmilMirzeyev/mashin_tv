import React, { ButtonHTMLAttributes, FC, HTMLProps, PropsWithChildren } from 'react'


const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
    <button {...props} className='w-36 h-10 border border-solid border-black rounded' >{children}</button>
  )
}

export default Button
import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button:React.FC<ButtonProps> = ({width, rounded}) => {
  return (
    <button className={`border-2 w-${width} rounded-${rounded} bg-red-500 p-3`}>Button</button>
  )
}

export default Button;
import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button:React.FC<ButtonProps> = ({width, styles, title}) => {
  return (
    <button className={`border-2 ${width} ${styles} bg-red-500 p-3 mb-9`}>{title}</button>
  )
}

export default Button;
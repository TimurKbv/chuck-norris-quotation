import React, { FC } from 'react'

type BtnProps = {
    handleText: () => void,
    animate: boolean
}

const Button: FC<BtnProps> = ( { handleText, animate } ) => {
  return (
        <button  
            // get new random text
            onClick={handleText} 
            className={animate ? "button animate uppercase" : "button uppercase"}
        >Click me </button>
  )
}

export default Button

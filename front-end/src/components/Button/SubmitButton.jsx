import React from 'react'
import Button from './Button.jsx'

const SubmitButton = ({ children, className='', ...props }) => {
  return (
        <Button 
                type='submit' 
                {...props} 
                className={`botao-submit ${className}`.trim()} 
        > 
                {children}
        </Button>
  )
}

export default SubmitButton

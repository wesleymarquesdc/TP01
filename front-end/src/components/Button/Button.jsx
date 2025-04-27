import React from 'react'

const Button = ({ children, type='button', onClick, className='button', ...props}) => {
        return (
                <button
                        type={type}
                        onClick={onClick}
                        className={`${className}`}
                        {...props}
                        >
                        {children}
                </button>
        )
}

export default Button

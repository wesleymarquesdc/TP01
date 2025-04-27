import React from 'react'

const Button = ({ children, type='button', onClick, className, ...props}) => {
        return (
                <button
                        type={type}
                        onClick={onClick}
                        className={`button ${className}`}
                        {...props}
                        >
                        {children}
                </button>
        )
}

export default Button

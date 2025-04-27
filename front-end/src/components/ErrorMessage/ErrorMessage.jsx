import React from 'react'

const ErrorMessage = ({ message, children, ...props }) => {
        if (!message) return null;

        return (
                <>
                        <p style={{ color: "red" }} {...props} >
                                {message}
                        </p>
                        {children}
                </>
        )    
}

export default ErrorMessage

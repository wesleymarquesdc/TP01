import React from 'react'
import Button from './Button'

const CloseButton = ({ onClick, children, ...props }) => {
        return (
                <Button className="btn-close" onClick={onClick} {...props}> 
                        {children || 'Fechar'}
                </Button>
        )
}

export default CloseButton

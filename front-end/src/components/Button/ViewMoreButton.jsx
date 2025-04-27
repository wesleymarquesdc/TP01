import './style.css';
import React from 'react'
import Button from './Button'

const ViewMoreButton = ({ onClick, children, ...props }) => {
        return (
                <Button className="btn-view-more" onClick={onClick} {...props}>
                        {children || 'Ver Mais'}
                </Button>
        )
}

export default ViewMoreButton

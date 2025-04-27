import React, { Children } from 'react'
import Button from './Button'

const ChatButton = ({ onClick, icon = '💬', children, ...props  }) => {
        return (
                <Button className={'btn-chat'} onClick={onClick} {...props} > 
                        {icon}
                        {children}
                </Button>
        )
}

export default ChatButton

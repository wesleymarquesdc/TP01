import React, { Children } from 'react'
import Button from './Button'

const ChatButton = ({ onClick, icon = '💬', children, ...props  }) => {
        return (
                <div className='chatDiv' style={{display: "flex", alignItems: "center", gap: "5px"}}>
                        <Button className={'btn-chat'} onClick={onClick} {...props} > 
                                {icon}
                        </Button>
                        {children}
                </div>
        )
}

export default ChatButton

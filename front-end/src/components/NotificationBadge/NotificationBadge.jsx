import React from 'react'

const NotificationBadge = ({ count, children, ...props}) => {
        if (!count || count <= 0) return null;

        return (
                <span className="notification-badge" {...props} > 
                        {children}
                        {count}
                </span>
        );
}

export default NotificationBadge

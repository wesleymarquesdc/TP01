import React from 'react'
import "../../pages/DashboardPage/Dashboard.css"

const Item = ({ item }) => {
        return (
                <div>
                        <h3>{item.title}</h3>
                        <p><strong>Local:</strong> {item.location}</p>
                        <p><strong>Data:</strong> {item.date}</p>
                </div>
        )
}

export default Item

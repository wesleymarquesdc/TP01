import "./style.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({onClick}) => {
        return (
                <div className='menu'>
                        <ul>
                                <li>
                                        {/* Define para onde ir*/}
                                        <Link to="/dashboard" className="menu-link">
                                                Itens
                                        </Link>
                                </li>
                                <li>
                                        <Link to="/" className="menu-link" onClick={onClick} >
                                                Logout
                                        </Link>
                                </li>
                        </ul>
                </div>
        )
}

export default Menu

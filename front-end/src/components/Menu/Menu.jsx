import "./style.css"
import React from 'react'
import { Link } from 'react-router-dom'
import UserItems from "../UserItems/UserItems";

const Menu = ({onClick}) => {
        const [ showUserItems, setShowUserItems] = React.useState(false);
        
        const handleClick = () => {
                setShowUserItems(true);
        };

        const handleClose = () => {
                setShowUserItems(false);
        };

        return (
                <div >
                        <ul>
                                <li>
                                        {/* Define para onde ir*/}
                                        <a onClick={handleClick} className="menu-link">
                                                Itens
                                        </a>
                                </li>
                                <li>
                                        <Link to="/" className="menu-link" onClick={onClick} >
                                                Logout
                                        </Link>
                                </li>
                        </ul>

                        {showUserItems && <UserItems onClose={handleClose}></UserItems>}
                </div>
        )
}

export default Menu

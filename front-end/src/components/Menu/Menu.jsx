import "./style.css"
import React from 'react'
import { Link } from 'react-router-dom'
import UserItems from "../UserItems/UserItems";

const Menu = ({onClick, choosePage="chat"}) => {
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
                                                itens
                                        </a>
                                </li>
                                <li>
                                        <Link to={`/${choosePage}`} className="menu-link">
                                                {choosePage}
                                        </Link>
                                </li>
                                <li>
                                        <Link to="/" className="menu-link" onClick={onClick} >
                                                logout
                                        </Link>
                                </li>
                        </ul>

                        {showUserItems && <UserItems onClose={handleClose}></UserItems>}
                </div>
        )
}

export default Menu

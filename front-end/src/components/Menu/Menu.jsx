import "./style.css"
import React from 'react'
import { Link } from 'react-router-dom'
import UserItems from "../UserItems/UserItems";

const Menu = ({onClick}) => {
        const [ showUserItems, setShowUserItems] = React.useState(false);
        
        const handleClick = () => {
                setShowUserItems(true);
        };

        return (
                <div >
                        <ul>
                                <li>
                                        {/* Define para onde ir*/}
                                        <Link onClick={handleClick} className="menu-link">
                                                Itens
                                                {showUserItems && <UserItems></UserItems>}
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

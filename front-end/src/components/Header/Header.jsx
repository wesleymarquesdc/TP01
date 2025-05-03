import "../../pages/DashboardPage/Dashboard.css"
import React from 'react'
import Menu from "../Menu/Menu"

const Header = ({userName, onClick}) => {
  return (
        <div className="dashboard-header">

                <div className="usuario-header">
                        <div>
                                Seja bem-vindo,  
                        </div> 
                        {userName ? userName : " "}
                </div>

                <div className="titulo-header">
                        <p id="p1">
                                Achados 
                        </p>

                        <p id="p2">
                                & Perdidos
                        </p>
                </div>

                <Menu onClick={onClick} ></Menu>
        </div>
  )
}

export default Header

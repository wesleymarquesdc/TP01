import "../../pages/DashboardPage/Dashboard.css"
import React from 'react'
import Menu from "../Menu/Menu"

const Header = ({user, onClick}) => {
  return (
        <>
                <div className="titulo-header">
                        <div className="p1">
                                Achados 
                        </div>

                        <div className="p2">
                                & Perdidos
                        </div>
                </div>

                <div>
                        {user}
                </div>


                <Menu onClick={onClick} ></Menu>
        </>
  )
}

export default Header

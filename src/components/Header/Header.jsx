import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleBurger = () => {
        setIsActive(!isActive)
    } 



  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg" alt="" className="logo" />

                <div className={`header__menu ${isActive ? 'active' : ''}`}>
                    <a href="">Home</a>
                    <a href="">catalog</a>
                    <a href="">Portfolio</a>
                    <a href="">Contacts</a>
                </div>

                <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header
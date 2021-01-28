// Navigation Bar - Shows the pop out navigation bar (home, favorites, about)

// With custom items
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [showNav, setShowNav] = useState();
    const navItems = [
        <Link to={'/'}>
            <div className="side-home-button">
                <div className="side-home-logo">
                    <img src="./images/home_button_icon.png" alt="Home Button Icon" />
                </div>
                <div className="side-home-name">Home</div>
            </div>
        </Link>,
        <Link to={'/favourites'}>
            <div className="side-favourites-button">
                <div className="side-favourites-logo">
                    <img src="./images/favourite_icon.png" alt="Favourite Icon" />
                </div>
                <div className="side-favourites-link">
                    <div className="side-favourites-name">Favourites</div>
                </div>
            </div>
        </Link>,
        <Link to={'/about'}>
            <div className="side-about-button">
                <div className="side-about-logo">
                    <img src="./images/about_icon.png" alt="About Icon" />
                </div>
                <div className="side-about-link">
                    <div className="side-about-name">About</div>
                </div>
            </div>
        </Link>,
    ];

    const title = <div className="nav-bar-logo">
        <Link to={'/'}><img className="side-logo" src="./images/filmdex_logo_2.png" alt='Movie Database Logo' /></Link>
    </div>

    return (
        <div className="nav-bar-styling">
            <MenuIcon onClick={() => setShowNav(true)} />
            <SideNav
                openFromRight={true}
                showNav={showNav}
                onHideNav={() => setShowNav(false)}
                title={title}
                items={navItems}
                titleStyle={{
                    backgroundColor: "#707793",
                    height: "180px",
                }}
                itemStyle={{
                    backgroundColor: '#1f2833',
                    listStyleType: "none",
                    marginBottom: "10px",
                    marginTop: "-16px",
                    marginLeft: "-40px",

                    height: "80px"
                }}
                itemHoverStyle={{ backgroundColor: '#707793' }}
                navStyle={{
                    backgroundColor: '#1f2833',
                    width: "300px"
                }} />
        </div>
    );

};
export default NavBar;
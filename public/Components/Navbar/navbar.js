import './navbar.css'
import NavbarItem from './NavbarComponents/NavbarItem/navbaritem';
import React, {useEffect, useState} from "react";

const Navbar = () => {
    const location = window.location.pathname;
    const isConferenceRoom = location === '/Forms/ConferenceRoom';
    const isWaitingRoom = location === '/Forms/WaitingRoom';
    const isLoginPage = location === '/Forms/Login';
    const isRegisterPage = location === '/Forms/Register';

    const [isHostConnected, setIsHostConnected] = useState(false);

    useEffect(() => {
        // Function to check if the cookie is set
        const checkCookie = () => {
            const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
            setIsHostConnected(cookieValue !== '');
        };
        checkCookie();
    }, []);

    return (  
        <nav className="navbar">
            <a href="/"><h1 className="logo">Binect</h1></a>
            <div className="navbar-links">
                {isHostConnected ? <NavbarItem active={isWaitingRoom} hrefer={"/Forms/WaitingRoom"} name={"Waiting room"}/> : null}
                {isHostConnected ? <NavbarItem active={isConferenceRoom} hrefer={"/Forms/ConferenceRoom"} name={"Conference room"}/> : null}
                {!isHostConnected ? <NavbarItem active={isLoginPage} hrefer={"/Forms/Login"} name={"Already member of Binect"}/> : null}
                {!isHostConnected ? <NavbarItem active={isRegisterPage} hrefer={"/Forms/Register"} name={"Join us!"}/> : null}
            </div>
            {isHostConnected && <a className="logout" href="/">Logout</a>}
            
        </nav>
    );
}
 
export default Navbar;
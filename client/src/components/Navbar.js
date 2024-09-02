import React, {useContext} from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {AuthContext} from "../context/AuthContext"

export const Navbar = () => {
    const navigate = useNavigate()
    const auth =  useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/generate" className="brand-logo">Csv Generator</NavLink>
                {/*<ul id="nav-mobile" className="right hide-on-med-and-down">*/}
                {/*    <li><a href="/" onClick={logoutHandler}>Logout</a></li>*/}
                {/*</ul>*/}
            </div>
        </nav>
    )
}
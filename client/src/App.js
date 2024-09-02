import React from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {AuthContext} from "./context/AuthContext"
import {PreloaderContext} from "./context/PreloaderContext"
import {useAuth} from "./hooks/auth.hook"
import {usePreloader} from "./hooks/preloader.hook"
import {Navbar} from "./components/Navbar"
import {Preloader} from "./components/Preloader"
import 'materialize-css'

// { isAuthenticated && <Navbar/> }
function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <PreloaderContext.Provider value={usePreloader()}>
            <Preloader/>
            <AuthContext.Provider value={{
                token, login, logout, userId, isAuthenticated
            }}>
                <Router>
                    { <Navbar/> }
                    <div className="container">
                        {routes}
                    </div>
                </Router>
            </AuthContext.Provider>
        </PreloaderContext.Provider>
    )
}

export default App

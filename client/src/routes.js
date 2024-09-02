import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {GeneratorPage} from "./pages/GeneratorPage"
// import {AuthPage} from "./pages/AuthPage"

export const useRoutes = isAuthenticated => {
    // if (isAuthenticated) {
        return (
            <Routes>
                <Route exact path="/" element={<GeneratorPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        )
    // }
    //
    // return (
    //     <Routes>
    //         <Route exact path="/" element={<AuthPage/>}/>
    //         <Route path="*" element={<Navigate to="/"/>}/>
    //     </Routes>
    // )
}
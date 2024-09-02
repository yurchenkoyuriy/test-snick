import React, {useContext} from "react"
import {PreloaderContext} from "../context/PreloaderContext"

export const Preloader = () => {
    const entry = useContext(PreloaderContext)

    if (entry.preloader) {
        return (
            <div className="preloader-full">
                <div className="progress">
                    <div className="indeterminate"/>
                </div>
            </div>
        )
    }

    return null
}
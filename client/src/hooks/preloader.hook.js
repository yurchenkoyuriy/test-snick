import {useCallback, useState} from "react"

export const usePreloader = () => {
    const [preloader, setPreloader] = useState(false)

    const showPreloader = useCallback(() => {
        setPreloader(true)
    }, [])

    const hidePreloader = useCallback(() => {
        setPreloader(false)
    }, [])

    return {preloader, showPreloader, hidePreloader}
}
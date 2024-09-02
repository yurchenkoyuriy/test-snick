import {createContext} from 'react'

function noop() {}

export const PreloaderContext = createContext({
    preloader: false,
    showPreloader: noop,
    hidePreloader: noop
})
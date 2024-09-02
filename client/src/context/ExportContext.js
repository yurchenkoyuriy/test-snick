import {createContext} from 'react'

function noop() {}

export const ExportContext = createContext({
    exportHandler: noop,
    fetchHandler: noop,
    setting: {
        getName: '',
        setName: noop,
        getExtension: '',
        getExportSetting: {},
        changeExportSetting: noop,
        updateExportSetting: noop,
        packStatus: false,
        setPackStatus: noop
    },
    reset: noop,
    counter: {
        get: 0,
        set: noop
    }
})
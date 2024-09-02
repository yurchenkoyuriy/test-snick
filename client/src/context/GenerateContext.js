import {createContext} from 'react'

function noop() {}

export const GenerateContext = createContext({
    getTemplate: [],
    rows: {
        getRows: [],
        getCount: 1000,
        getDefault: [],
        add: noop,
        remove: noop,
        update: noop,
        reset: noop,
        setRows: noop,
        dnd: noop,
        changeCount: noop,
        save: noop
    },
    file: {
        getName: 'generate',
        setName: noop,
        getExtension: 'csv',
        getExportSetting: {},
        changeExportSetting: noop,
        updateExportSetting: noop
    }
})
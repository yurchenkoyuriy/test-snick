import {useCallback, useState} from 'react'
import {useHttp} from "./http.hook"
import {exportFormatTemplate} from "../template/export.template"
import JSZip from "jszip"
import writeXlsxFile from "write-excel-file"

const def = {
    extension: 'csv',
    templateName: 'generate'
}

export const useExport = () => {
    const {request} = useHttp()
    const [counterChange, setCounterChange] = useState(0)
    const [templateName, setTemplateName] = useState(def.templateName)
    const [extension, setExtension] = useState(def.extension)
    const exportTemplate = exportFormatTemplate()
    const [exportSetting, setExportSetting] = useState(exportTemplate[0])
    const [packStatus, setPackStatus] = useState(false)

    const csvExportHandler = data => {
        return new Blob([data], {type: 'text/csv'})
    }
    const jsonExportHandler = data => {
        return new Blob([data], {type: 'application/json'})
    }
    const sqlExportHandler = data => {
        return new Blob([data], {type: 'text/plain'})
    }
    const xmlExportHandler = data => {
        return new Blob([data], {type: 'text/xml'})
    }
    const xlsxExportHandler = async data => {
        return await writeXlsxFile(data)
    }

    const download = (blob, filename, extension, pack) => {
        if(pack) {
            const zip = new JSZip()
            zip.file(`${filename}.${extension}`, blob)
            zip.generateAsync({type: "blob"}).then(content => {
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveBlob(content, `${filename}.zip`)
                }
                const elem = window.document.createElement('a')
                elem.href = window.URL.createObjectURL(content)
                elem.download = `${filename}.zip`
                document.body.appendChild(elem)
                elem.click()
                document.body.removeChild(elem)
                window.URL.revokeObjectURL(blob)
            })
            return true
        }
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, `${filename}.${extension}`)
        }
        const elem = window.document.createElement('a')
        elem.href = window.URL.createObjectURL(blob)
        elem.download = `${filename}.${extension}`
        document.body.appendChild(elem)
        elem.click()
        document.body.removeChild(elem)
        window.URL.revokeObjectURL(blob)
    }

    const fetchHandler = useCallback(async body => {
        return await request('/api/generate/run', 'POST', body)
    }, [])

    const exportHandler = useCallback(async (data, filename, extension, pack = false, blob) => {
        blob = null

        switch (extension) {
            case 'json':
                blob = await jsonExportHandler(data)
                break
            case 'sql':
                blob = await sqlExportHandler(data)
                break
            case 'xml':
                blob = await xmlExportHandler(data)
                break
            case 'csv':
                blob = await csvExportHandler(data)
                break
            case 'xlsx':
                blob = await xlsxExportHandler(data, filename)
                break
        }
        download(blob, filename, extension, pack)
    }, [])

    const reset = useCallback(() => {
        setTemplateName(def.templateName)
        setExtension(def.extension)
    }, [])

    const changeExportSetting = useCallback(ext => {
        setExtension(ext)
        const setting = JSON.parse(JSON.stringify(
            exportTemplate.find(e => e.key === ext)
        ))
        setExportSetting(setting)
    }, [])

    const updateExportSetting = useCallback(setting => {
        setExportSetting(setting)
    }, [])

    return {
        exportHandler,
        fetchHandler,
        setting: {
            getName: templateName,
            setName: setTemplateName,
            getExtension: extension,
            getExportSetting: exportSetting,
            changeExportSetting,
            updateExportSetting,
            packStatus,
            setPackStatus
        },
        reset,
        counter: {
            get: counterChange,
            set: setCounterChange
        }
    }
}
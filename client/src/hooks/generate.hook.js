import {v4 as uuid} from "uuid"
import {useCallback, useEffect, useState} from "react"
import {templateConfig} from "../template/default.template"
import Cookies from 'universal-cookie'

const def = {
    rows: 1000,
}

export const useGenerate = () => {
    const cookies = new Cookies()
    const [rowCount, setRowCount] = useState(def.rows)
    const [rows, setRows] = useState([])
    const [rowDefault, setRowDefault] = useState([])
    const template = templateConfig()

    useEffect(() => {
        if (cookies.get('myTemplate')) {
            setRows(cookies.get('myTemplate'))
        } else {
            setRows(
                JSON.parse(JSON.stringify(
                    template.slice().filter(item => item.default)
                )).map(item => {
                    item.id = uuid()
                    return item
                }).sort((a, b) => a.order > b.order ? 1 : -1)
            )
        }

        setRowDefault(
            JSON.parse(JSON.stringify(
                template.slice().find(item => item.default)
            ))
        )
    }, [])


    const add = useCallback((rows, rowDefault) => {
        const copyRowDefault = JSON.parse(JSON.stringify(rowDefault))
        copyRowDefault.id = uuid()
        setRows(() => [...rows, copyRowDefault])
    }, [])


    const remove = useCallback((rows, index) => {
        setRows([...rows.slice(0, index), ...rows.slice(index + 1)])
    }, [])

    const update = useCallback((rows) => {
        setRows(rows)
    }, [])

    const reset = useCallback(() => {
        setRows(
            JSON.parse(JSON.stringify(
                template.slice().filter(item => item.default)
            )).map(item => {
                item.id = uuid()
                return item
            }).sort((a, b) => a.order > b.order ? 1 : -1)
        )
        setRowCount(def.rows)
    }, [])

    const save = useCallback(rows => cookies.set('myTemplate', JSON.stringify(rows)), [])

    const dnd = useCallback((result, rows) => {
        if (!result.destination) {
            return false
        }
        const {source, destination} = result
        const copiedItems = [...rows]
        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)
        setRows(copiedItems)
    }, [])

    const changeCount = useCallback(e => {
        setRowCount(e.target.value)
    }, [])

    return {
        getTemplate: template,
        rows: {
            getRows: rows,
            getCount: rowCount,
            getDefault: rowDefault,
            add,
            remove,
            update,
            reset,
            setRows,
            dnd,
            changeCount,
            save
        }
    }
}
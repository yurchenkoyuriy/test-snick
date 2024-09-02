import React, {useEffect, useState, useContext} from "react"
import TextareaAutosize from "react-textarea-autosize"
import {GenerateContext} from "../context/GenerateContext"
import {ExportContext} from "../context/ExportContext"

export const GeneratePreview = () => {
    const generate = useContext(GenerateContext)
    const exp = useContext(ExportContext)
    const [demoData, setDemoData] = useState('')

    useEffect(() => {
        fetchPreviewHandler().then()
    }, [generate.rows.getRows, exp.setting.getExtension, exp.counter.get])

    const fetchPreviewHandler = async () => {
        const result = await exp.fetchHandler({
            rows: generate.rows.getRows,
            count: 10,
            extension: exp.setting.getExtension,
            setting: exp.setting.getExportSetting,
            preview: true
        })
        setDemoData(result)
    }

    return (
        <div className="col s10 offset-s1">
            <div className="row">
                <div className="input-field col s12">
                    <TextareaAutosize
                        className="materialize-textarea"
                        value={demoData}
                        onChange={()=> {}}
                        row={20}
                    />
                </div>
            </div>
        </div>
    )
}
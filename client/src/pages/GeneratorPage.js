import React from "react"
import {GenerateContainer} from "../components/GenerateContainer"
import {useGenerate} from "../hooks/generate.hook"
import {useExport} from "../hooks/export.hook"
import {GenerateContext} from "../context/GenerateContext"
import {ExportContext} from "../context/ExportContext"

export const GeneratorPage = () => {
    return (
        <GenerateContext.Provider value={useGenerate()}>
            <ExportContext.Provider value={useExport()}>
                <GenerateContainer/>
            </ExportContext.Provider>
        </GenerateContext.Provider>
    )
}
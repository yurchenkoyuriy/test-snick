import React, {useContext} from "react"
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {GenerateContext} from "../context/GenerateContext"
import {PreloaderContext} from "../context/PreloaderContext"
import {ExportContext} from "../context/ExportContext"
import {GenerateRow} from "./GenerateRow"
import {GeneratePreview} from './GeneratePreview'
import {exportFormatTemplate} from "../template/export.template"
import {ExportFieldSetting} from "./_fields/field.export.setting.component"
import AddSharpIcon from '@mui/icons-material/AddSharp'
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp'
import RefreshIcon from '@mui/icons-material/Refresh'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import FolderZipIcon from '@mui/icons-material/FolderZip';

export const GenerateContainer = () => {
    const generate = useContext(GenerateContext)
    const exp = useContext(ExportContext)
    const preloader = useContext(PreloaderContext)
    const exportTemplate = exportFormatTemplate()

    const exportClick = async () => {
        preloader.showPreloader()

        const data = await exp.fetchHandler({
            rows: generate.rows.getRows,
            count: generate.rows.getCount,
            extension: exp.setting.getExtension,
            setting: exp.setting.getExportSetting
        })

        exp.exportHandler(data, exp.setting.getName, exp.setting.getExtension, exp.setting.packStatus)
        preloader.hidePreloader()
    }

    return (
        <div className="row">
            <div className="col s10 offset-s1">
                <DragDropContext onDragEnd={result => generate.rows.dnd(result, generate.rows.getRows)}>
                    <div>
                        <Droppable droppableId={`aac96e2f-3125-4e9c-a347-630041fe60cc`}>
                            {(provider) => {
                                return (
                                    <div className="flex-table"
                                         {...provider.droppableProps}
                                         ref={provider.innerRef}
                                         style={{
                                             ...provider.droppableProps.style
                                         }}
                                    >
                                        <div className="table-flex-header">
                                            <div className="table-flex-col"/>
                                            <div className="table-flex-col">Field name</div>
                                            <div className="table-flex-col">Data type</div>
                                            <div className="table-flex-col">Setting</div>
                                            <div className="table-flex-col"/>
                                        </div>
                                        {generate.rows.getRows.map((row, i) => {
                                            return (
                                                <GenerateRow
                                                    row={row}
                                                    indexRow={i}
                                                    key={i}
                                                />
                                            )
                                        })}
                                        {provider.placeholder}
                                    </div>
                                )
                            }}
                        </Droppable>
                    </div>
                </DragDropContext>
            </div>
            <div className="col s10 offset-s1">
                <div className="action-fields">
                    <div className="input-field input-field-count">
                        <label>Template name</label>
                        <input
                            type="text"
                            value={exp.setting.getName}
                            onChange={e => exp.setting.setName(e.target.value)}
                        />
                    </div>
                    <div className="input-field input-field-count ">
                        <select
                            className="browser-default"
                            defaultValue={exp.setting.getExtension}
                            onChange={e => exp.setting.changeExportSetting(e.target.value)}
                            key={exp.setting.getExtension}
                        >
                            {exportTemplate.map(r => {
                                return (
                                    <option value={r.key} key={r.key}>{r.label}</option>
                                )
                            })}
                        </select>
                    </div>
                    {
                        Object.entries(exp.setting.getExportSetting.fields).map(([key, item], i) => {
                            return (
                                <ExportFieldSetting
                                    field={item}
                                    index={key}
                                    key={key}
                                />
                            )
                        })
                    }
                    <div className="input-field input-field-count">
                        <label>Rows</label>
                        <input type="number" value={generate.rows.getCount} onChange={generate.rows.changeCount}/>
                    </div>
                </div>
            </div>
            <div className="col s10 offset-s1">
                <div className="action-btn">
                    <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => generate.rows.add(generate.rows.getRows, generate.rows.getDefault)}>
                        <AddSharpIcon/>
                    </button>
                    <button className="btn-floating btn-large waves-effect waves-light orange" onClick={generate.rows.reset}>
                        <RefreshIcon/>
                    </button>

                    <button
                        style={{margin: '3px'}}
                        className={
                            `btn-floating btn-large waves-effect waves-light ${exp.setting.packStatus ? 'green' : 'red'}`
                        }
                        onClick={() => exp.setting.setPackStatus(!exp.setting.packStatus)}>
                        <FolderZipIcon/>
                    </button>
                    <button className="btn-floating btn-large waves-effect waves-light orange" onClick={() => generate.rows.save(generate.rows.getRows)}>
                        <BookmarkAddIcon/>
                    </button>
                    <button className="btn-floating btn-large waves-effect waves-light green" onClick={exportClick}>
                        <SaveAltSharpIcon/>
                    </button>
                </div>
            </div>
            <GeneratePreview />
        </div>
    )
}
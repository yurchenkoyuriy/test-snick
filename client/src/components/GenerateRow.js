import React, {useContext} from "react"
import {Draggable} from 'react-beautiful-dnd'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import {FieldSelect} from "./_fields/field.select.component"
import {FieldTitle} from "./_fields/field.title.component"
import {GenerateContext} from "../context/GenerateContext"
import {FieldSetting} from "./_fields/field.setting.component"


export const GenerateRow = ({row, indexRow}) => {
    const generate = useContext(GenerateContext)

    const changeTypeHandler = event => {
        const index = event.target.dataset.index
        const value = event.target.value
        const currentOption = JSON.parse(JSON.stringify(generate.getTemplate.find(item => item.key === value)))
        let updatedRows = generate.rows.getRows.slice()
        updatedRows[index].field = currentOption.field
        updatedRows[index].fields = currentOption.fields
        updatedRows[index].setting = currentOption.setting
        updatedRows[index].key = value
        generate.rows.update(updatedRows)
    }

    const changeNameHandler = event => {
        const index = event.target.dataset.index
        let updatedRows = generate.rows.getRows.slice()
        updatedRows[index].name = event.target.value
        generate.rows.update(updatedRows)
    }

    const changeStatusHandler = index => {
        let updatedRows = generate.rows.getRows.slice()
        updatedRows[index].active = !updatedRows[index].active
        generate.rows.update(updatedRows)
    }

    return (
        <Draggable
            key={row.id}
            draggableId={row.id}
            index={indexRow}
        >
            {(provider, snapshot) => {
                return (
                    <div className="table-flex-row"
                         ref={provider.innerRef}
                         {...provider.draggableProps}
                         {...provider.dragHandleProps}
                         style={{
                             userSelect: 'none',
                             border: snapshot.isDragging ? "1px solid #ddd" : "",
                             ...provider.draggableProps.style
                         }}
                         key={indexRow}
                    >
                        <div className="table-flex-col">
                            <FormatAlignJustifyIcon/>
                        </div>
                        <div className="table-flex-col">
                            <FieldTitle
                                value={row.name}
                                onChange={changeNameHandler}
                                indexRow={indexRow}
                            />
                        </div>
                        <div className="table-flex-col">
                            <FieldSelect
                                value={row.key}
                                onChange={changeTypeHandler}
                                indexRow={indexRow}
                            />
                        </div>
                        <div className="table-flex-col">
                            {Object.entries(row.fields).map(([indexItem, field], i) => {
                                return (
                                    <FieldSetting
                                        field={field}
                                        indexItem={indexItem}
                                        indexRow={indexRow}
                                        key={i}
                                    />
                                )
                            })}
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <button
                                style={{margin: '3px'}}
                                className={
                                    `btn-floating btn-small waves-effect waves-light ${row.active ? 'green' : 'red'} remove-btn-small-circle`
                                }
                                onClick={() => changeStatusHandler(indexRow)}>
                            </button>
                            <button
                                style={{margin: '3px'}}
                                className="btn-floating btn-small waves-effect waves-light red remove-btn-small-circle"

                                onClick={() => generate.rows.remove(generate.rows.getRows, indexRow)}>
                                <DeleteForeverIcon/>
                            </button>
                        </div>
                    </div>
                )
            }}
        </Draggable>
    )
}
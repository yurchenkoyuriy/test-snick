import React, {useContext} from "react"
import {GenerateContext} from "../../context/GenerateContext"

export const FieldSetting = ({field, indexItem, indexRow}) => {
    const generate = useContext(GenerateContext)
    const {type, value, label} = field

    const onChange = event => {

        const index = event.target.dataset.row
        const item = event.target.dataset.item
        const value = event.target.value

        let updatedRows = generate.rows.getRows.slice()
        const copyUpdatedRows = JSON.parse(JSON.stringify(updatedRows[index]))

        if (copyUpdatedRows.fields[item].type === 'number') {
            copyUpdatedRows.fields[item].value = parseInt(value)
        } else {
            copyUpdatedRows.fields[item].value = value
        }

        updatedRows[index] = copyUpdatedRows
        generate.rows.update(updatedRows)
    }

    switch (type) {
        case 'date':
        case 'datetime-local':
        case 'email':
        case 'number':
        case 'range':
        case 'search':
        case 'tel':
        case 'time':
        case 'url':
        case 'month':
        case 'week':
        case 'text':
            return (
                <div key={indexRow} className="input-field">
                    <label>{label}</label>
                    <input
                        className="input-card-blue"
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={label}
                        data-row={indexRow}
                        data-item={indexItem}
                    />
                </div>
            )
        case 'textarea':
            return (
                <div key={indexRow} className="input-field">
                    <label>{label}</label>
                    <textarea
                        rows={5}
                        className="materialize-textarea"
                        value={value}
                        onChange={onChange}
                        placeholder={label}
                        data-row={indexRow}
                        data-item={indexItem}
                    />
                </div>
            )
        case 'select':
            return (
                <div key={indexRow} className="input-field">
                    <label>{label}</label>
                    <select
                        className="browser-default"
                        onChange={onChange}
                        data-row={indexRow}
                        data-item={indexItem}
                    >
                        {value.map((option, key) => {
                            return (
                                <option value={option.key}
                                        key={key}>{option.label}</option>
                            )
                        })}
                    </select>
                </div>
            )
        default:
            return (
               <>
               </>
            )
    }
}
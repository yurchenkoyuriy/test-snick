import React, {useContext} from "react"
import {ExportContext} from "../../context/ExportContext"

export const ExportFieldSetting = ({field, index}) => {

    const exp = useContext(ExportContext)

    const onChange = event => {
        const index = event.target.dataset.index
        const value = event.target.value

        let updated = exp.setting.getExportSetting
        const copyUpdated = JSON.parse(JSON.stringify(updated.fields[index]))
        copyUpdated.value = value
        updated.fields[index] = copyUpdated
        exp.setting.updateExportSetting(updated)

        exp.counter.set(exp.counter.get +1)
    }
    
    switch (field.type) {
        case 'text':
            return (
                <div className="input-field input-field-count">
                    <label>{field.label}</label>
                    <input
                        className="input-card-blue"
                        type={field.type}
                        value={field.value}
                        data-index={index}
                        onChange={onChange}
                        placeholder={field.label}
                    />
                </div>
            )
        case 'select':
            return (
                <div className="input-field input-field-count">
                    <label>{field.label}</label>
                    <select
                        className="browser-default"
                        onChange={onChange}
                        data-index={index}
                        defaultValue={field.value}
                    >
                        {field.values.map((option, key) => {
                            return (
                                <option value={option.value}
                                        key={key}>{option.label}</option>
                            )
                        })}
                    </select>
                </div>
            )
        default:
            return null
    }
}
import React, {useContext} from "react"
import {GenerateContext} from "../../context/GenerateContext"

export const FieldSelect = ({value, onChange, indexRow}) => {
    const {getTemplate} = useContext(GenerateContext)

    return (
        <select
            className="browser-default"
            data-index={indexRow}
            onChange={onChange}
            defaultValue={value}>
                {getTemplate.map((option, key) => {
                    return (
                        <option value={option.key}
                                key={key}>{option.label}</option>
                    )
                })}
        </select>
    )
}
import React from "react"

export const FieldTitle = ({value, onChange, indexRow}) => {

    return (
        <input
            type="text"
            data-index={indexRow}
            className="input-card-blue"
            onChange={onChange}
            value={value}
        />
    )
}
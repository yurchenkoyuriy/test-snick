export const exportFormatTemplate = () => {
    return [
        {
            key: "csv",
            label: "csv",
            fields: {
                delimiter: {
                    type: "select",
                    key: "delimiter",
                    label: "Delimiter",
                    value: ';',
                    values: [
                        {
                            label: 'Comma',
                            value: ','
                        },
                        {
                            label: 'Tab',
                            value: ''
                        },
                        {
                            label: 'Semicolon',
                            value: ';'
                        },
                        {
                            label: 'Pipe',
                            value: '|'
                        },
                    ]
                },
                quote:{
                    type: "select",
                    key: "quote",
                    label: "Quote",
                    value: '"',
                    values: [
                        {
                            label: 'Double quote',
                            value: `"`
                        },
                        {
                            label: 'Quote',
                            value: `'`
                        },
                    ]
                },
                escape:{
                    type: "select",
                    key: "escape",
                    label: "Escape",
                    value: '"',
                    values: [
                        {
                            label: 'Double quote',
                            value: `"`
                        },
                        {
                            label: 'Quote',
                            value: `'`
                        },
                        {
                            label: 'Backslash',
                            value: `\\`
                        }
                    ]
                },
                end_line: {
                    type: "select",
                    key: "end_line",
                    label: "End line",
                    value: `\n`,
                    values: [
                        {
                            label: '\\n',
                            value: `\n`
                        },
                        {
                            label: '\\r\\n',
                            value: `\r\n`
                        },
                    ]
                },
                include_header: {
                    type: "select",
                    key: "include_header",
                    label: "Include header",
                    value: 'yes',
                    values: [
                        {
                            label: 'Yes',
                            value: 'yes'
                        },
                        {
                            label: 'No',
                            value: 'no'
                        },
                    ]
                }
            }
        },
        {
            key: "sql",
            label: "sql",
            fields: {
                table_name: {
                    type: "text",
                    key: "table_name",
                    label: "Table name",
                    value: 'MyTable'
                },
                include_header: {
                    type: "select",
                    key: "include_header",
                    label: "Include create table statement",
                    value: 'yes',
                    values: [
                        {
                            label: 'Yes',
                            value: 'yes'
                        },
                        {
                            label: 'No',
                            value: 'no'
                        },
                    ]
                }
            }
        },
        {
            key: "json",
            label: "json",
            fields: {}
        },
        {
            key: "xml",
            label: "xml",
            fields: {
                root_tag: {
                    type: "text",
                    key: "root_tag",
                    label: "Root tag",
                    value: 'root'
                },
                record_tag: {
                    type: "text",
                    key: "record_tag",
                    label: "Record tag",
                    value: 'record'
                }
            }
        },
        {
            key: "xlsx",
            label: "excel",
            fields: {
                include_header: {
                    type: "select",
                    key: "include_header",
                    label: "Include header",
                    value: 'yes',
                    values: [
                        {
                            label: 'Yes',
                            value: 'yes'
                        },
                        {
                            label: 'No',
                            value: 'no'
                        },
                    ]
                }
            }
        }
    ]
}
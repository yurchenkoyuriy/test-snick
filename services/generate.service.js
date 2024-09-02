const moment = require('moment')
const {faker} = require('@faker-js/faker')

module.exports = class GenerateService {
    constructor() {
        this.row = 0
        this.output = ``
        this.outputHeader = []
        this.outputBody = []
        this.header = []
    }

    getOutput() {
        return this.output
    }

    setIndexRow(row) {
        this.row = row
    }

    setRow(item) {
        switch (item.key) {
            case 'age':
                return faker.datatype.number({
                    min: item.fields.min.value,
                    max: item.fields.max.value
                })
            case 'alpha':
                return faker.random.alpha(item.fields.count.value)
            case 'avatar':
                return faker.internet.avatar()
            case 'birthday':
                return faker.date.birthdate({
                    min: item.fields.min.value,
                    max: item.fields.max.value,
                    mode: 'age'
                })
            case 'bool':
                return faker.datatype.boolean()
            case 'char':
                const charData = (item.fields.text.value).split('')
                return charData[faker.datatype.number({
                    min: 0,
                    max: charData.length - 1
                })]
            case 'city':
                return faker.address.cityName()
            case 'ccnumber':
                return faker.finance.creditCardNumber()
            case 'date':
                return this.getRandomDateHandler(
                    item.fields.min.value,
                    item.fields.max.value,
                    item.fields.format.value
                )
            case 'digit':
                return faker.random.numeric(item.fields.length.value)
            case 'dollar':
                return faker.finance.amount(
                    item.fields.min.value,
                    item.fields.max.value,
                    2,
                    '$'
                )
            case 'domain':
                return faker.internet.domainName()
            case 'domainSuffix':
                return faker.internet.domainSuffix()
            case 'email':
                return faker.internet.email()
            case 'emailExample':
                return faker.internet.exampleEmail()
            case 'emoji':
                return faker.internet.emoji()
            case 'first':
                return faker.name.firstName()
            case 'float':
                return this.getRandomFloatHandler(
                    item.fields.min.value,
                    item.fields.max.value,
                    item.fields.scale.value
                )
            case 'gender':
                return faker.name.sex()
            case 'guid':
                return faker.datatype.uuid()
            case 'human':
                return faker.color.human()
            case 'httpMethod':
                return faker.internet.httpMethod()
            case 'httpStatusCode':
                return faker.internet.httpStatusCode()
            case 'imei':
                return faker.phone.imei()
            case 'integer':
                return faker.random.numeric(5) * (faker.datatype.boolean() ? -1 : 1)
            case 'ip':
                return faker.internet.ip()
            case 'ipv6':
                return faker.internet.ipv6()
            case 'last':
                return faker.name.lastName()
            case 'latitude':
                return faker.address.latitude()
            case 'longitude':
                return faker.address.longitude()
            case 'lines':
                return faker.lorem.lines(item.fields.count.value)
            case 'mac':
                return faker.internet.mac()
            case 'mi':
                return faker.random.alpha({
                    count: 1,
                    casing: 'upper'
                })
            case 'name':
                return faker.name.fullName() // stateAbbr
            case 'natural':
                return faker.datatype.number({
                    max: item.fields.max.value
                })
            case 'paragraph':
                return faker.lorem.paragraph(item.fields.sentenceCount.value)
            case 'password':
                return faker.internet.password()
            case 'phone':
                return faker.phone.phoneNumber(item.fields.format.value)
            case 'pick':
                return this.getChoiceHandler(item.fields.text.value)
            case 'port':
                return faker.internet.port()
            case 'postal':
                return faker.address.zipCode(item.fields.format.value)
            case 'protocol':
                return faker.internet.protocol()
            case 'rgb':
                return faker.color.rgb()
            case 'seq':
                return this.getIdHandler(item.fields.from.value)
            case 'sentence':
                return faker.lorem.words(item.fields.num.value)
            case 'slug':
                return faker.lorem.slug(item.fields.num.value)
            case 'state':
                return faker.address.state() // stateAbbr
            case 'street':
                return faker.address.streetAddress()
            case 'string':
                return faker.datatype.string(item.fields.length.value)
            case 'timezone':
                return faker.address.timeZone()
            case 'url':
                return faker.internet.url()
            case 'userAgent':
                return faker.internet.userAgent()
            case 'userName':
                return faker.internet.userName()
            case 'word':
                return faker.lorem.word(item.fields.length.value)
            case 'yn':
                return faker.datatype.boolean() ? 'Y' : 'N'
            case 'zip':
                return faker.address.zipCode(item.fields.format.value)
            case 'custom':
                return null
            default:
                return item.name
        }
    }

    setData(data) {
        const {rows, count, extension, setting, preview} = data

        this.setDataHeader(data) // Handler output or header

        // Handler rows
        for (let i = 0; i < count; i++) {
            const line = {}
            let customFieldCheck = false

            this.setIndexRow(i)

            rows.forEach(item => {
                line[item.name] = this.setRow(item)

                if(item.key === 'custom'){
                    customFieldCheck = true
                }
            })
            if(customFieldCheck){
                rows.forEach(item => {
                    if(item.key === 'custom'){
                        line[item.name] = eval(item.fields.custom.value)
                    }
                })
            }

            switch (extension) {
                case 'json':
                    this.outputBody.push(line)
                    break
                case 'sql':
                    const headerSql = this.outputHeader.join(', ')
                    const tableName = setting.fields.table_name.value;
                    const sqlValue = []

                    Object.entries(line).forEach(([key, value], i) => {
                        if (typeof value === 'string' || value instanceof String) {
                            sqlValue.push(`'${value.toString().replace(/'/ig, `\\'`)}'`)
                        } else {
                            sqlValue.push(value)
                        }
                    })
                    this.output += `Insert Into ${tableName} (${headerSql}) Values (${sqlValue.join(', ')});  \n`
                    break
                case 'xml':
                    const tagRecord = setting.fields.record_tag.value;
                    const records = []
                    Object.entries(line).forEach(([key,value], i) => {
                        records.push(`\t\t\t<${key}>${value}</${key}>\n`)
                    })
                    this.output += `\t\t<${tagRecord}>\n${records.join('')}\t\t</${tagRecord}>\n`
                    break
                case 'csv':
                    this.outputBody.push(Object.values(line))
                    break
                case 'xlsx':
                    if (preview) {
                        this.outputBody.push(Object.values(line))
                        break
                    }
                    const excelData = []
                    Object.values(line).forEach(item => excelData.push({
                        value: item
                    }))
                    this.outputBody.push(excelData)
                    break
            }
        }

        this.setDataOutput(data) // Handler output
    }

    setDataHeader(data) {
        const {rows, extension, setting, preview} = data

        switch (extension) {
            case 'csv':
                if (setting.fields.include_header.value === 'yes') {
                    this.outputHeader = rows.map(item => item.name)
                }
                break
            case 'xlsx':
                if (setting.fields.include_header.value === 'yes') {
                    if (preview) {
                        this.outputHeader = rows.map(item => item.name)
                    } else {
                        rows.forEach(item => this.outputHeader.push({
                            value: item.name
                        }))
                    }
                }
                break
            case 'sql':
                this.outputHeader = rows.map(item => item.name)
                if (setting.fields.include_header.value === 'yes') {
                    let values = rows.map(item => {
                        switch (item.key){
                            case 'alpha':
                                return `${item.name} ${item.type}(${item.fields.count.value})`
                            case 'bool':
                                return `${item.name} ${item.type}(1)`
                            case 'digit':
                                return `${item.name} ${item.type}(${item.fields.length.value})`
                            case 'word':
                                return `${item.name} ${item.type}(${item.fields.length.value})`
                        }

                        switch (item.type){
                            case 'varchar':
                                return `${item.name} ${item.type}(255)`
                            case 'float':
                                return `${item.name} ${item.type}(${String(item.fields.max.value).length},${item.fields.scale.value})`
                            default :
                                return `${item.name} ${item.type}`
                        }
                    })


                    this.output += `Create Table ${setting.fields.table_name.value} ( ${values.join(', ')} ); \n`
                }
                break
            default:
                this.outputHeader = rows.map(item => item.name)
        }
    }

    setDataOutput(data){
        const {extension, setting, preview} = data
        let quote = `"`
        let separator = `;`
        let end_line = `\n`
        let escape = `'`

        switch (extension){

            case 'json':
                this.output = JSON.stringify(this.outputBody, undefined, 4)
                break
            case 'sql':
                break
            case 'xml':
                const tagRoot = setting.fields.root_tag.value
                this.output = `<${tagRoot}>\n${this.output}\n</${tagRoot}>`
                break
            case 'xlsx':
                if (preview) {
                    this.output = this.csvGenerateRows(
                        this.outputHeader.length ? [this.outputHeader, ...this.outputBody] : this.outputBody,
                        quote,
                        separator,
                        end_line,
                        escape
                    )
                }else{
                    this.output = this.outputHeader.length ? [this.outputHeader, ...this.outputBody] : this.outputBody
                }
                break
            case 'csv':
                quote = setting.fields.quote.value
                separator = setting.fields.delimiter.value
                end_line = setting.fields.end_line.value
                escape = setting.fields.escape.value
                this.output = this.csvGenerateRows(
                    this.outputHeader.length ? [this.outputHeader, ...this.outputBody] : this.outputBody,
                    quote,
                    separator,
                    end_line,
                    escape
                )
        }
    }

    getIdHandler(from = 1) {
        return from + this.row
    }

    getRandomFloatHandler(min = 1, max = 1000, scale = 2) {
        return (Math.random() * (max - min) + min).toFixed(scale)
    }

    getRandomDateHandler(min = '', max = '', format = 'YYYY-MM-DD') {
        if (!min) {
            min = new Date()
        } else {
            min = new Date(min)
        }
        if (!max) {
            max = new Date()
        } else {
            max = new Date(max)
        }

        let diff = max.getTime() - min.getTime()
        let date = new Date(Math.random() * diff + min.getTime())
        return moment(date.toString()).format(format)
    }

    getChoiceHandler(data = '') {
        const array = data.split('\n').filter(function (el) {
            return el
        })

        if (!array.length) {
            return ''
        }

        return array[
            faker.datatype.number({
                min: 0,
                max: array.length - 1
            })
            ]
    }

    csvGenerateRows(rows, quote, separator, end_line, escape) {
        return rows
            .filter(e => e)
            .map(
                row => row
                    .map((element) => (typeof element === 'undefined' || element === null) ? '' : element)
                    .map(column => {
                        const regQuote = /'/ig
                        const reqDoubleQuote = /"/ig
                        switch (quote) {
                            case `"`:
                                column = column.toString().replace(reqDoubleQuote, `${escape}"`)
                                break
                            case `'`:
                                column = column.toString().replace(regQuote, `${escape}'`)
                                break
                        }

                        return `${quote}${column}${quote}`
                    })
                    .join(separator)
            )
            .join(end_line)
    }
}
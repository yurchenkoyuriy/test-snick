export const templateConfig = () => {
    return [
        {
            "key": "age",
            "label": "Age",
            "name": "age",
            'type': 'integer',
            "fields": {
                "min": {
                    "type": "number",
                    "label": "From",
                    "value": 1
                },
                "max": {
                    "type": "number",
                    "label": "To",
                    "value": 120
                },
            },
            active: true
        },
        {
            "key": "alpha",
            "label": "Alpha",
            "name": "alpha",
            'type': 'varchar',
            "fields": {
                "count": {
                    "type": "number",
                    "label": "From",
                    "value": 1
                },
            },
            active: true
        },
        {
            "key": "avatar",
            "label": "Avatar",
            "name": "avatar",
            'type': 'text',
            "fields": {},
            active: true
        },
        {
            "key": "birthday",
            "label": "Birthday",
            "name": "birthday",
            'type': 'date',
            "fields": {
                "min": {
                    "type": "number",
                    "label": "From (Year)",
                    "value": 18
                },
                "max": {
                    "type": "number",
                    "label": "To (Year)",
                    "value": 30
                },
            },
            active: true
        },
        {
            "key": "bool",
            "label": "Bool",
            "name": "bool",
            'type': 'tinyint',
            "fields": {},
            active: true
        },
        {
            "key": "char",
            "label": "Char",
            "name": "char",
            'type': 'varchar',
            "fields": {
                "text" : {
                    "type": "text",
                    "label": "Letter",
                    "value": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
                }
            },
            active: true
        },
        {
            "key": "city",
            "label": "City",
            "name": "city",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "ccnumber",
            "label": "Credit Card Number",
            "name": "ccnumber",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "date",
            "label": "Date",
            "name": "date",
            'type': 'date',
            "fields": {
                "min": {
                    "type": "date",
                    "label": "From",
                    "value": ""
                },
                "max": {
                    "type": "date",
                    "label": "From",
                    "value": ""
                },
                'format': {
                    "type": "date",
                    "label": "From",
                    "value": ""
                }
            },
            active: true
        },
        {
            "key": "digit",
            "label": "Digit",
            "name": "digit",
            'type': 'integer',
            "fields": {
                "length": {
                    "type": "number",
                    "label": "Length",
                    "value": 5
                }
            },
            active: true
        },
        {
            "key": "dollar",
            "label": "Dollar",
            "name": "dollar",
            'type': 'varchar',
            "fields": {
                "min": {
                    "type": "number",
                    "label": "Min",
                    "value": 5
                },
                "max": {
                    "type": "number",
                    "label": "Max",
                    "value": 10
                }
            },
            active: true
        },
        {
            "key": "domain",
            "label": "Domain",
            "name": "domain",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "domainSuffix",
            "label": "Domain suffix",
            "name": "domain_suffix",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "email",
            "label": "Email",
            "name": "Email",
            'type': 'varchar',
            "fields": {},
            default: true,
            order: 3,
            active: true
        },
        {
            "key": "emailExample",
            "label": "Email Example",
            "name": "emailExample",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "emoji",
            "label": "Emoji",
            "name": "emoji",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "first",
            "label": "First name",
            "name": "firstname",
            'type': 'varchar',
            "fields": {},
            default: true,
            order: 1,
            active: true
        },
        {
            "key": "float",
            "label": "Float",
            "name": "float",
            'type': 'float',
            "fields": {
                "min": {
                    "type": "number",
                    "label": "From",
                    "value": 1
                },
                "max": {
                    "type": "number",
                    "label": "To",
                    "value": 1000
                },
                'scale': {
                    "type": "number",
                    "label": "Scale",
                    "value": 2
                }
            },
            active: true
        },
        {
            "key": "gender",
            "label": "Gender",
            "name": "gender",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "guid",
            "label": "GUID",
            "name": "guid",
            'type': 'varchar',
            "fields": [],
            active: true
        },
        {
            "key": "human",
            "label": "Human",
            "name": "human",
            'type': 'varchar',
            "fields": [],
            active: true
        },
        {
            "key": "httpMethod",
            "label": "httpMethod",
            "name": "httpMethod",
            'type': 'varchar',
            "fields": [],
            active: true
        },
        {
            "key": "httpStatusCode",
            "label": "httpStatusCode",
            "name": "httpStatusCode",
            'type': 'integer',
            "fields": [],
            active: true
        },
        {
            "key": "imei",
            "label": "Imei",
            "name": "imei",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "integer",
            "label": "Integer",
            "name": "integer",
            'type': 'integer',
            "fields": {},
            active: true
        },
        {
            "key": "ip",
            "label": "ip",
            "name": "ip",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "ipv6",
            "label": "ipv6",
            "name": "ipv6",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "last",
            "label": "Last name",
            "name": "lastname",
            'type': 'varchar',
            "fields": {},
            default: true,
            order: 2,
            active: true
        },
        {
            "key": "latitude",
            "label": "Latitude",
            "name": "latitude",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "longitude",
            "label": "Longitude",
            "name": "longitude",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "lines",
            "label": "Lines",
            "name": "lines",
            'type': 'varchar',
            "fields": {
                "count": {
                    "type": "number",
                    "label": "Count",
                    "value": 1
                },
            },
            active: true
        },
        {
            "key": "mac",
            "label": "Mac",
            "name": "mac",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "mi",
            "label": "mi",
            "name": "mi",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "name",
            "label": "Name",
            "name": "name",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "natural",
            "label": "Natural",
            "name": "natural",
            'type': 'integer',
            "fields": {
                "max": {
                    "type": "number",
                    "label": "Max",
                    "value": 99999
                },
            },
            active: true
        },
        {
            "key": "paragraph",
            "label": "Paragraph",
            "name": "paragraph",
            'type': 'text',
            "fields": {
                "sentenceCount": {
                    "type": "number",
                    "label": "Sentence count",
                    "value": 3
                },
            },
            active: true
        },
        {
            "key": "password",
            "label": "Password",
            "name": "password",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "pick",
            "label": "Pick",
            "name": "pick",
            'type': 'text',
            "fields": {
                "text" : {
                    "type": "textarea",
                    "label": "Word list (one per line)",
                    "value": ""
                }
            },
            active: true
        },
        {
            "key": "phone",
            "label": "Phone",
            "name": "phone",
            'type': 'varchar',
            "fields": {
                "format": {
                    "type": "text",
                    "label": "Format",
                    "value": "+1 (###) ###-####"
                },
            },
            active: true
        },
        {
            "key": "port",
            "label": "Port",
            "name": "port",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "postal",
            "label": "Postal",
            "name": "postal",
            'type': 'varchar',
            "fields": {
                "format": {
                    "type": "text",
                    "label": "Format",
                    "value": "###-###"
                },
            },
            active: true
        },
        {
            "key": "protocol",
            "label": "Protocol",
            "name": "protocol",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "seq",
            "label": "Seq",
            "name": "id",
            'type': 'integer',
            "fields": {
                "from": {
                    "type": "number",
                    "label": "From",
                    "value": 1
                },
            },
            "default": true,
            "order": 0,
            active: true
        },
        {
            "key": "rgb",
            "label": "rgb",
            "name": "rgb",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "sentence",
            "label": "Sentence",
            "name": "sentence",
            'type': 'text',
            "fields": {
                "num": {
                    "type": "number",
                    "label": "Num",
                    "value": 1
                },
            },
            active: true
        },
        {
            "key": "slug",
            "label": "Slug",
            "name": "slug",
            'type': 'varchar',
            "fields": {
                "num": {
                    "type": "number",
                    "label": "Word count",
                    "value": 3
                },
            },
            active: true
        },
        {
            "key": "state",
            "label": "State",
            "name": "state",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "street",
            "label": "Street address",
            "name": "street",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "string",
            "label": "String",
            "name": "string",
            'type': 'varchar',
            "fields": {
                "length": {
                    "type": "number",
                    "label": "Length",
                    "value": 10
                },
            },
            active: true
        },
        {
            "key": "timezone",
            "label": "Timezone",
            "name": "timezone",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "url",
            "label": "url",
            "name": "url",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "userAgent",
            "label": "User Agent",
            "name": "userAgent",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "userName",
            "label": "User Name",
            "name": "userName",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "word",
            "label": "Word",
            "name": "word",
            'type': 'varchar',
            "fields": {
                "length": {
                    "type": "number",
                    "label": "Length",
                    "value": 5
                },
            },
            active: true
        },
        {
            "key": "yn",
            "label": "Y-N",
            "name": "yn",
            'type': 'varchar',
            "fields": {},
            active: true
        },
        {
            "key": "zip",
            "label": "Zip",
            "name": "zip",
            'type': 'varchar',
            "fields": {
                "format": {
                    "type": "text",
                    "label": "Format",
                    "value": '####'
                }
            },
            active: true
        },
        {
            "key": "custom",
            "label": "Custom",
            "name": "custom",
            'type': 'text',
            "fields": {
                "custom": {
                    "type": "textarea",
                    "label": "Custom",
                    "value": `line.firstname + '.' + line.lastname + '@gmail.com';`
                }
            },
            active: true
        }
    ]
}
const config = require('config')
const GenerateService = require("../services/generate.service")

exports.getTemplate = async (req, res) => {
    const template = config.get('template')
    res.json(template)
}

exports.init = async (req, res) => {
    try {
        const {rows, count, extension, setting, preview} = req.body

        const currentGenerateService = new GenerateService()

        currentGenerateService.setData({
            rows: rows.filter(item => item.active),
            count,
            extension,
            setting,
            preview
        })

        const output = currentGenerateService.getOutput()

        res.json(output)

    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

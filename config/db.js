const mongoose = require('mongoose')
const config = require('config')


exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.get('mongoUri'), {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

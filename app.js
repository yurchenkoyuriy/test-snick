const express = require('express')
const config = require('config')
const path = require('path')
const DB = require('./config/db')

const app = express()

DB.connectDB()


app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/generate', require('./routes/generate.routes'))



if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

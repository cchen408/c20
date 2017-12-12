const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`c20 app litening on port ${port}`))
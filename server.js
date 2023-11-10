require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT ?? 3000
console.table(process.env)
const title = process.env.TITLE ?? 'Default title';

app.get('/', (req, res) => {
  res.send(title)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
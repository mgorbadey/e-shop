require('dotenv').config()
const express = require('express')
const sequelize = require('./db')

const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log('\x1b[33m',`Server started on  port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

start()


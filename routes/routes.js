const express = require('express');
const user = require('../controllers/user')

const routes = {
    user: express.Router()
    .get('/info',user.example)
}

module.exports = routes
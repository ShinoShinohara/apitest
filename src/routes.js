const express = require('express');

const routes = express.Router();

routes.get('/', (res, res) => {
    return res.json({ hello: 'World'})
})

module.exports = routes;
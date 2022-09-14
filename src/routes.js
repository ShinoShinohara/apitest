const express = require('express');

const routes = express.Router();

routes.get('/', (res, req) => {
    return res.json({ hello: 'World'})
})

module.exports = routes;
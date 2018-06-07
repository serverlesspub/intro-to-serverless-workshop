'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

api.get('/', () => 'HELLO WORLD')

module.exports = api


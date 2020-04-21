'use strict'

const express = require('express')

function registerCrashReportEndpoint(callback) {
  const router = express.Router()

  router.post('/', (req, res, next) => {
    callback({
      ts: Date.now(),
      headers: req.headers,
      report: req.body
    })
    res.end()
  })

  return router
}

module.exports = registerCrashReportEndpoint
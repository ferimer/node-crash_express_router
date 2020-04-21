# Client Crash Reports

Express Router for receiving Client Crash Reports

## How to use

```$javascript
'use strict'

const crashReporter = require('@ferimer/crash_express_router')

const router = crashReporter(err => {
  console.log('Received client crash report: ', err)
    // Insert into ELK, Database or whatever
})

module.exports = router
```

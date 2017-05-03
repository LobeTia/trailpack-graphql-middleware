'use strict'

const TrailsApp = require('trails')

before((done) => {
  global.app = new TrailsApp(require('./app'))
  global.app.start()
    .then(() => {
      done()
    })
    .catch(global.app.stop)
})

after(() => {
  return global.app.stop()
})

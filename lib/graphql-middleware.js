'use strict'

const _ = require('lodash')
const routes = require('./routes')

module.exports = {
  addRoutes: (app) => {
    let prefix = _.get(app.config, 'graphql.prefix') || _.get(app.config, 'footprints.prefix')

    if (prefix) {
      if (prefix[0] !== "/")
        prefix = "/" + prefix;

      routes.forEach(route => {
        route.path = prefix + route.path
      })
    }
    app.config.routes = app.config.routes.concat(routes)
  }
}

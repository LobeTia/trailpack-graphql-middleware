'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')
const _ =require("lodash")

module.exports = class MiddlewareTrailpack extends Trailpack {
  /**
   * TODO document method
   */
  validate() {

  }

  /**
   * TODO document method
   */
  configure() {
    lib.GraphqlMiddleware.addRoutes(this.app)
  }

  /**
   * TODO document method
   */
  initialize() {
    this.app.services.GraphqlServerService.init(this.app.api.graphql.Schema)
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

module.exports.Graphql = require("graphql")

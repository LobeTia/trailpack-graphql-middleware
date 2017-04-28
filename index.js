'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

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
    let schema = new this.app.api.graphql.Schema(this.app)
    this.app.services.GraphqlServerService.init(schema.instance())
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
module.exports.Schema = lib.Schema

'use strict'

const Service = require('trails-service')
const {
  graphqlExpress
} = require('graphql-server-express')

/**
 * @module GraphqlServerService
 * @description TODO document Service
 */
module.exports = class GraphqlServerService extends Service {
  constructor(app) {
    super(app)
    this.graphqlInstance = null
  }
  init(schemaInstance) {
    this.graphqlInstance = graphqlExpress({
      schema: schemaInstance
    })
  }
  getInstance(){
    return this.graphqlInstance
  }
}

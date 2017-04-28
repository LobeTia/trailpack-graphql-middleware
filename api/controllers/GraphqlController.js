'use strict'

const Controller = require('trails-controller')
const bodyParser = require('body-parser')
const {
  graphiqlExpress
} = require('graphql-server-express')

/**
 * @module GraphqlController
 * @description Generated Trails.js Controller.
 */
module.exports = class GraphqlController extends Controller {
  gui(req, res) {
    if (this.app.config.graphql.graphiql) {
      graphiqlExpress({
        endpointURL: "/graphql"
      })(req, res)
    }else{
      res.status(404).send()
    }
  }

  callback(req, res, next) {
    this.parseRequest(req)
      .then(() => {
        this.app.services.GraphqlServerService.getInstance()(req, res)
      })
  }

  parseRequest(req) {
    let promise = Promise.resolve()
    promise = this.parseText(req)

    promise.then(() => {
      if (req.is('application/graphql')) {
        req.body = {
          query: req.body
        }
      }
      return
    })
    return promise
  }
  parseText(req) {
    return new Promise((resolve, reject) => {
      bodyParser.text({
        type: 'application/graphql'
      })(req, null, (error) => {
        (error) ? reject(error): resolve()
      })
    })
  }
}

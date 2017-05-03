'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
const Schema = require('../').Schema

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {},
    graphql: {
      Schema: class SchemaInstance extends Schema {
        constructor(app) {
          super(app)

          this.schema=null
        }
      }
    }
  },
  config: {
    main: {
      packs: [
        require('trailpack-router'),
        require('trailpack-express'),
        require('trailpack-sequelize'),
        require('../')
      ]
    },
    web: {
      express: require('express'),
    },
    routes: [],
    database: {
      stores: {
        /**
         * Define a store called "local" which uses SQLite3 to persist data.
         */
        sqlitedev: {
          database: 'dev',
          storage: './.tmp/dev.sqlite',
          host: '127.0.0.1',
          dialect: 'sqlite'
        }
      },
      models: {
        defaultStore: 'sqlitedev',
        migrate: 'drop'
      }
    }
  }
}, smokesignals.FailsafeConfig)

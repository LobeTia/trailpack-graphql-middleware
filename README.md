# trailpack-graphql-server

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Trailpack to add graphql support to Trails application  
Based on [apollographql/graphql-server](https://github.com/apollographql/graphql-server) 

### WARNING

 * This Trailpack work only with [trailpack-express](https://github.com/trailsjs/trailpack-express) as webserver 
 * More webserver support 
 * This Trailpack don't replace the ORM 
 * See example directory for a rapid reference

## WIP - Not production ready

## Install

```sh
$ npm install --save trailpack-graphql-server
$ yo trails:trailpack trailpack-graphql-server
```

## Configure

### Add Trailpack
```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-graphql-server')
  ]
}
```

### Create Schema.js in api/graphql
```js
// api/index.js
'use strict'

exports.controllers = require('./controllers')
...
exports.graphql = require('./graphql')
```

```js
// api/graphql/index.js
'use strict'

module.exports.Schema = require('./Schema')
```

```js
// config/main.js
'use strict'

const {
  buildSchema,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('trailpack-graphql-middleware').Graphql
const Schema = require('trailpack-graphql-middleware').Schema

module.exports = class SchemaInstance extends Schema {
  constructor(app) {
    super(app)
    const Post = new GraphQLObjectType({
      name: 'Post',
      description: 'Blog post content',
      fields: () => ({
        id: {
          type: GraphQLString
        },
        title: {
          type: GraphQLString
        },
        description: {
          type: GraphQLString
        }
      })
    })

    const Query = new GraphQLObjectType({
      name: 'BlogSchema',
      description: 'Root of the Blog Schema',
      fields: () => ({
        posts: {
          type: new GraphQLList(Post),
          description: 'List of posts in the blog',
          resolve: () => {
            return app.orm.Post.findAll()
          }
        }
      })
    })

    const Mutuation = new GraphQLObjectType({
      name: 'BlogMutations',
      fields: {
        createPost: {
          type: Post,
          description: 'Create blog post',
          args: {
            title: {
              type: new GraphQLNonNull(GraphQLString)
            },
            description: {
              type: GraphQLString
            }
          },
          resolve: function (source, args) {
            return app.orm.Post.create(args)
          }
        }
      }
    })

    this.schema = new GraphQLSchema({
      query: Query,
      mutation: Mutuation
    })

  }
}

```

[npm-image]: https://img.shields.io/npm/v/trailpack-graphql-server.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-graphql-server
[ci-image]: https://img.shields.io/travis//trailpack-graphql-server/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-graphql-server
[daviddm-image]: http://img.shields.io/david//trailpack-graphql-server.svg?style=flat-square
[daviddm-url]: https://david-dm.org//trailpack-graphql-server
[codeclimate-image]: https://img.shields.io/codeclimate/github//trailpack-graphql-server.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-graphql-server


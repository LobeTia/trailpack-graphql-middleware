# trailpack-graphql-server

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Add Graphql server to a Trail app

- trailpack-express is required

## WIP - Not production ready

## Install

```sh
$ npm install --save trailpack-graphql-server
$ yo trails:trailpack trailpack-graphql-server
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-graphql-server')
  ]
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


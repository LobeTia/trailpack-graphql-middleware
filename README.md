# trailpack-graphql-middleware

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Add Graphql server to a Trail app

- trailpack-express is required

## WIP - Not production ready

## Install

```sh
$ npm install --save trailpack-graphql-middleware
$ yo trails:trailpack trailpack-graphql-middleware
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-graphql-middleware')
  ]
}
```

[npm-image]: https://img.shields.io/npm/v/trailpack-graphql-middleware.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-graphql-middleware
[ci-image]: https://img.shields.io/travis//trailpack-graphql-middleware/master.svg?style=flat-square
[ci-url]: https://travis-ci.org//trailpack-graphql-middleware
[daviddm-image]: http://img.shields.io/david//trailpack-graphql-middleware.svg?style=flat-square
[daviddm-url]: https://david-dm.org//trailpack-graphql-middleware
[codeclimate-image]: https://img.shields.io/codeclimate/github//trailpack-graphql-middleware.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github//trailpack-graphql-middleware


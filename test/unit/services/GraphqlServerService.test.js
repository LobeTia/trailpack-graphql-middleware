'use strict'
/* global describe, it */
const assert = require('assert')

describe('GraphqlServerService', () => {
  it('should exist', () => {
    assert(global.app.api.services['GraphqlServerService'])
  })
})

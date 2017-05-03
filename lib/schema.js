'use strict'

module.exports = class Schema {
  constructor(app) {
    this.schema = null
  }
  instance() {
    return this.schema
  }
}

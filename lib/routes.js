module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/graphql',
    handler: 'GraphqlController.callback'
  },
  {
    method: ['GET'],
    path: '/graphiql',
    handler: 'GraphqlController.gui'
  }
]

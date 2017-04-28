module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/graphql',
    handler: 'GraphqlController.callback'
  }
]

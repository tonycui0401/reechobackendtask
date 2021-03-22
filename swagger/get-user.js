module.exports = {
  tags: ['Get User'],
  description: 'Fetch basic user info',
  operationId: 'getUser',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch basic user info.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              user_name: {
                type: 'string',
                description: 'User Name'
              }
            }
          }
        }
      }
    }
  }
};

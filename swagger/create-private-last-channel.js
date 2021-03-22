module.exports = {
  tags: ['Create ptivate last channel'],
  description: 'Create a private last message entry',
  operationId: 'CreatPrivateLastChannel',
  security: [
    {
      bearerAuth: []
    }
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            user1: {
              description: 'user id 1',
              type: 'string'
            },
            user2: {
              description: 'user id 2',
              type: 'integer'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'channel created successfully'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

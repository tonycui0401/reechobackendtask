module.exports = {
  tags: ['Create group last channel'],
  description: 'Create a group last message entry',
  operationId: 'CreatGroupLastChannel',
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
            group_id: {
              description: 'group chat id 1',
              type: 'string'
            },
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

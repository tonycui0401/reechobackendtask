module.exports = {
  tags: ['Create Tags'],
  description: 'Create your tags.',
  operationId: 'CreatTags',
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
            title: {
              description: 'your tag name',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'tag created successfully'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

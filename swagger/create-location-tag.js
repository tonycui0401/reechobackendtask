module.exports = {
  tags: ['Create Location Tag'],
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
              description: 'city name',
              type: 'string'
            },
            country: {
              description: 'country name',
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

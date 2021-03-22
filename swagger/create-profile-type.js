module.exports = {
  tags: ['Create Profile Type'],
  description: 'Create your profile type.',
  operationId: 'CreatTProfileType',
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
            type: {
              description: 'your profile type',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'profile type created successfully'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

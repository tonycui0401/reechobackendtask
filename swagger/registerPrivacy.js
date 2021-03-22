/* eslint-disable no-undef */
module.exports = {
  tags: ['add new privacy for a particular user'],
  description: 'share your privacy with a particular user',
  operationId: 'registerPrivacy',
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
            receipt_id: {
              description: 'user id you want to share privacy with',
              type: 'integer'
            },
            privacy_type: {
              description: 'your privacy type',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'add successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

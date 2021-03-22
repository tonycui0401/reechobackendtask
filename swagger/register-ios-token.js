/* eslint-disable no-undef */
module.exports = {
  tags: ['add new ios device token for a particular user'],
  description: 'add new device token for a user',
  operationId: 'registerDeviceToken',
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
            token: {
              description: 'user device token string',
              type: 'string'
            },
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

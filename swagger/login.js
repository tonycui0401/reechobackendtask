/* eslint-disable no-undef */
module.exports = {
  tags: ['Login'],
  description: 'Login with your email and password',
  operationId: 'login',
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
            email: {
              description: 'your email',
              type: 'string'
            },
            password: {
              description: 'your password',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'login successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

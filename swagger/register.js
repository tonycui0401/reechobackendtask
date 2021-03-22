/* eslint-disable no-undef */
module.exports = {
  tags: ['Register'],
  description: 'Register with your email, password, firstname, lastname',
  operationId: 'register',
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
            },
            firstname: {
              description: 'your firstname',
              type: 'string'
            },
            lastname: {
              description: 'your lastname',
              type: 'string'
            },
            phone: {
              description: 'your phone',
              type: 'string'
            },
            city: {
              description: 'your city',
              type: 'string'
            },
            country: {
              description: 'your country',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'register successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

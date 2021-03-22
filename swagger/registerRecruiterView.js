/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Recruiter View'],
  description: 'Register with your profile view ordering',
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
            rorder: {
              description: 'profile ordering json string',
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

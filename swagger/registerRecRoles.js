/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Recruiter Roles'],
  description: 'Register with your Roles',
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
            experience: {
              description: '',
              type: 'string'
            },
            roles: {
              description: '',
              type: 'string'
            },
            cntract_type: {
              description: '',
              type: 'string'
            },
            clients: {
              description: '',
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

/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Candidate Education'],
  description: 'Register with your education',
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
            degree: {
              description: '',
              type: 'string'
            },
            institution: {
              description: '',
              type: 'string'
            },
            start_date: {
              description: '',
              type: 'string'
            },
            end_date: {
              description: '',
              type: 'string'
            },
            education: {
              description: '',
              type: 'string'
            },
            privacy: {
              description: 'your privacy',
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

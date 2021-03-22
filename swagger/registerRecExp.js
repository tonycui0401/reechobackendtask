/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Recruiter Experience'],
  description: 'Register with your experience',
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
            job_title: {
              description: '',
              type: 'string'
            },
            company: {
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
            working_type: {
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

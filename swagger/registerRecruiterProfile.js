/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Recruiter Profile'],
  description: 'Register with your profile',
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
            aboutyou: {
              description: '',
              type: 'string'
            },
            approachcandidates: {
              description: '',
              type: 'string'
            },
            approachemployer: {
              description: '',
              type: 'string'
            },
            proudof: {
              description: '',
              type: 'string'
            },
            werenotrecruiter: {
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

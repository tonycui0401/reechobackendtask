/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Candidate Profile'],
  description: 'Register with your profile info',
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
            hearabout: {
              description: 'hear about',
              type: 'string'
            },
            nextachievements: {
              description: 'your next achievements',
              type: 'string'
            },
            surpriseof: {
              description: 'your surprise of',
              type: 'string'
            },
            proudof: {
              description: 'your proud of',
              type: 'string'
            },
            seekingstatus: {
              description: 'seeking status',
              type: 'string'
            },
            nextachieve_privacy: {
              description: 'your next achievements privacy',
              type: 'string'
            },
            proudof_privacy: {
              description: 'your proud of privacy',
              type: 'string'
            },
            surpriseof_privacy: {
              description: 'your surprise with privacy',
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

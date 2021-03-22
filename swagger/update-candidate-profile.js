/* eslint-disable no-undef */
module.exports = {
  tags: ['Candidate Profile Update'],
  description: 'update candidate',
  operationId: 'updateCandidate',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'profile id',
      required: true,
      type: 'string'
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            hearabout: {
              description: 'your hearabout',
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
              description: 'your seeking status',
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
            },
            contact_privacy: {
              description: 'your contact detail privacy',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'update successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

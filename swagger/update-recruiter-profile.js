/* eslint-disable no-undef */
module.exports = {
  tags: ['Recruiter Profile Update'],
  description: 'update recruiter',
  operationId: 'updateRecruiter',
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
            aboutyou: {
              description: 'about you',
              type: 'string'
            },
            approachcandidates: {
              description: 'your approach to candidates',
              type: 'string'
            },
            approachemployer: {
              description: 'your approach to employer',
              type: 'string'
            },
            proudof: {
              description: 'your proud of',
              type: 'string'
            },
            werenotrecruiter: {
              description: 'if you were not recruiter',
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

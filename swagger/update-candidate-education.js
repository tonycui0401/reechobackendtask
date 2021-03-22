/* eslint-disable no-undef */
module.exports = {
  tags: ['Candidate Education Update'],
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
            degree: {
              description: 'your degree',
              type: 'string'
            },
            institution: {
              description: 'your institution',
              type: 'string'
            },
            start_date: {
              description: 'your start date',
              type: 'string'
            },
            end_date: {
              description: 'your end date',
              type: 'string'
            },
            education: {
              description: 'your education',
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
      description: 'update successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

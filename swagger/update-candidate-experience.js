/* eslint-disable no-undef */
module.exports = {
  tags: ['Candidate Experience Update'],
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
            job_title: {
              description: 'your job title',
              type: 'string'
            },
            company: {
              description: 'your company',
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
            experience: {
              description: 'your experience',
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

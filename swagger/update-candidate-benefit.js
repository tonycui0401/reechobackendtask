/* eslint-disable no-undef */
module.exports = {
  tags: ['Candidate Benefit Update'],
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
            currentpay: {
              description: 'your current pay',
              type: 'string'
            },
            current_currency: {
              description: 'your current currency',
              type: 'string'
            },
            expectedpay: {
              description: 'your expected pay',
              type: 'string'
            },
            expected_currency: {
              description: 'your proud of',
              type: 'string'
            },
            noticeperiod: {
              description: 'your seeking status',
              type: 'string'
            },
            anyimportant: {
              description: 'your anything important',
              type: 'string'
            },
            current_type: {
              description: 'your current type',
              type: 'string'
            },
            expected_type: {
              description: 'your expected type',
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

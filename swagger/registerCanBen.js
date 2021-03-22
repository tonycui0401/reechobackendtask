/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Candidate Benefits'],
  description: 'Register with your benefits',
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
            currentpay: {
              description: '',
              type: 'decimal'
            },
            expectedpay: {
              description: '',
              type: 'decimal'
            },
            current_currency: {
              description: '',
              type: 'string'
            },
            expected_currency: {
              description: '',
              type: 'string'
            },
            current_type: {
              description: '',
              type: 'string'
            },
            expected_type: {
              description: '',
              type: 'string'
            },
            noticeperiod: {
              description: '',
              type: 'string'
            },
            anyimportant: {
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

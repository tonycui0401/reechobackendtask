/* eslint-disable no-undef */
module.exports = {
  tags: ['Send Email'],
  description: 'Send confirm email to user',
  operationId: 'sendmail',
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
            to: {
              description: 'your email',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'email sent'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

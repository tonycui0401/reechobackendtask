/* eslint-disable no-undef */
module.exports = {
  tags: ['add new contact book for a particular user'],
  description: 'add new contact book for a particular user',
  operationId: 'registerContactBook',
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
            contact_id: {
              description: 'user id you want to add to contact book',
              type: 'integer'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'add successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

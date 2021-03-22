/* eslint-disable no-undef */
module.exports = {
  tags: ['add new chat list for a particular user'],
  description: 'add new chat list for a particular user',
  operationId: 'registerChatList',
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
            title: {
              description: 'chat list title',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'show new added chat list'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

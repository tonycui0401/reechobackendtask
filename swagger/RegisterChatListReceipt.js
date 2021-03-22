/* eslint-disable no-undef */
module.exports = {
  tags: ['add receipt for a chat list'],
  description: 'add new receipt for a chat list it could be group chat or private chat',
  operationId: 'registerChatListReceipt',
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
            chat_list_id: {
              description: 'chat list is',
              type: 'string'
            },
            receipt_type: {
              description: 'group or private',
              type: 'string'
            },
            receipt_id: {
              description: 'group chat id or private chat (user id) id',
              type: 'string'
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

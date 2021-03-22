module.exports = {
  tags: ['Create Group chat Group'],
  description: 'Create a new group chat group',
  operationId: 'CreatGroupChatGroup',
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
            name: {
              description: 'group chat name',
              type: 'string'
            },
            createdby: {
              description: 'created by user id',
              type: 'integer'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'tag created successfully'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

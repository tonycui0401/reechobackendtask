module.exports = {
  tags: ['Remove chat list'],
  description: 'delete the chat list by id',
  operationId: 'deleteChatList',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'row id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'show the deleted user chat list'
    }
  }
};

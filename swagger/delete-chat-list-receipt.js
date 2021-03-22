module.exports = {
  tags: ['Remove chat list receipt'],
  description: 'delete the chat list receipt by id',
  operationId: 'deleteChatListReceipt',
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
      description: 'show the deleted user chat list receipt'
    }
  }
};

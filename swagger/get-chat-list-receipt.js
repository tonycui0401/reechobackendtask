module.exports = {
  tags: ['Get Chat list receipt'],
  description: 'Fetch all chat lists from a user',
  operationId: 'getChatListReceipt',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'chat list receipt id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch user chat list receipts.',
    }
  }
};

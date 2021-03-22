module.exports = {
  tags: ['Get private chat unseen by the receipt'],
  description: 'get private chat unseen by the receipt',
  operationId: 'GetPrivateChatUnseen',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'receipt',
      in: 'query',
      description: 'receipt user id',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'fetch all private chat unseen by the receipt'
    }
  }
};

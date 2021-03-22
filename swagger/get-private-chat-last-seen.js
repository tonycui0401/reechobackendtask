module.exports = {
  tags: ['Get private chat last seen status by the user'],
  description: 'get private last seen status by the user',
  operationId: 'GetPrivateChatLastSeen',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'sender',
      in: 'query',
      description: 'sender user id',
      required: true,
      type: 'integer'
    },
    {
      name: 'receipt',
      in: 'query',
      description: 'receipt user id',
      required: true,
      type: 'integer'
    },
  ],
  responses: {
    200: {
      description: 'fetch the private chat last seen status by the receipt'
    }
  }
};

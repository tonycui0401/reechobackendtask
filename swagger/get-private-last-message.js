module.exports = {
  tags: ['Get private Chat last message Between 2 users'],
  description: 'get private Chat last message Between 2 users',
  operationId: 'GetPrivateLastMessageChat',
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
      description: 'fetch all private chat between 2 users'
    }
  }
};

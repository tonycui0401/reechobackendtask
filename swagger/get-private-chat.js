module.exports = {
  tags: ['Get all private Chat Between 2 users'],
  description: 'get all private Chat Between 2 users',
  operationId: 'GetPrivateChat',
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

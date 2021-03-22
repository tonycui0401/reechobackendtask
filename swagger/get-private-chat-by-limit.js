module.exports = {
  tags: ['Get all private Chat Between 2 users by limit'],
  description: 'get all private Chat Between 2 users',
  operationId: 'GetPrivateChatByLimit',
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
    {
      name: 'offset',
      in: 'query',
      description: 'message starting from which recorder number',
      required: true,
      type: 'integer'
    },
    {
      name: 'limit',
      in: 'query',
      description: 'how mang messages you want to load',
      required: true,
      type: 'integer'
    },
  ],
  responses: {
    200: {
      description: 'fetch a portion of messages'
    }
  }
};

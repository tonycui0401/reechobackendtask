module.exports = {
  tags: ['Get private Chat last message channel for a user'],
  description: 'get private Chat last message channel for a user',
  operationId: 'GetPrivateLastMessageChannel',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'user id',
      required: true,
      type: 'integer'
    },
  ],
  responses: {
    200: {
      description: 'fetch all last message channels'
    }
  }
};

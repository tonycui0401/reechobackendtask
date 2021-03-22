module.exports = {
  tags: ['Get group Chat last message channel for a user'],
  description: 'get group Chat last message channel for a user',
  operationId: 'GetGroupLastMessageChannel',
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

module.exports = {
  tags: ['Search text in private chat'],
  description: 'search any text from a private chat relevant to a user',
  operationId: 'SearchPrivateChatText',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'search',
      in: 'query',
      description: 'search term',
      required: true,
      type: 'string'
    },
    {
      name: 'sender',
      in: 'query',
      description: 'user id',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'fetch all searched private chat by user'
    }
  }
};

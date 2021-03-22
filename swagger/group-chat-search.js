module.exports = {
  tags: ['Search text in group chat'],
  description: 'search any text from all group chat',
  operationId: 'SearchGroupChatText',
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
    }
  ],
  responses: {
    200: {
      description: 'fetch all searched group chat'
    }
  }
};

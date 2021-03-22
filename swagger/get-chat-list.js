module.exports = {
  tags: ['Get Chat list'],
  description: 'Fetch all chat lists from a user',
  operationId: 'getChatList',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch user chat lists .',
    }
  }
};

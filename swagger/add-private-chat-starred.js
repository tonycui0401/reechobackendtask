module.exports = {
  tags: ['Add private chat starred message'],
  description: 'add private chat starred',
  operationId: 'addPrivateChatStarred',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'message id',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'add message starred'
    }
  }
};

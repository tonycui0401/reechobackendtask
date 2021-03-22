module.exports = {
  tags: ['Add group chat starred message'],
  description: 'add group chat starred',
  operationId: 'addGroupChatStarred',
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

module.exports = {
  tags: ['Remove group chat starred message'],
  description: 'remove group chat starred',
  operationId: 'removeGroupChatStarred',
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
      description: 'remove message starred'
    }
  }
};

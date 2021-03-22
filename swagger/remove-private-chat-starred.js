module.exports = {
  tags: ['Remove private chat starred message'],
  description: 'remove private chat starred',
  operationId: 'removePrivateChatStarred',
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

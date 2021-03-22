module.exports = {
  tags: ['Private chat status update'],
  description: 'update user private chat status',
  operationId: 'updateUserPrivateChatStatus',
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
      name: 'time',
      in: 'query',
      description: 'member seen time',
      required: true,
      type: 'integer'
    },
  ],
  responses: {
    200: {
      description: 'update member seen time'
    }
  }
};

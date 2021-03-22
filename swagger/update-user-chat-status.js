module.exports = {
  tags: ['User online offline status update'],
  description: 'update user online, offline status',
  operationId: 'updateUserUserChatStatus',
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
    {
      name: 'chatstatus',
      in: 'query',
      description: 'user chat status',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'update user chat status successfully'
    }
  }
};

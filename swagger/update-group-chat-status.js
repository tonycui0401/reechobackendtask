module.exports = {
  tags: ['Group chat status update'],
  description: 'update user group chat status',
  operationId: 'updateUserGroupChatStatus',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'seenby',
      in: 'query',
      description: 'member user id',
      required: true,
      type: 'integer'
    },
    {
      name: 'room',
      in: 'query',
      description: 'group chat room id',
      required: true,
      type: 'integer'
    },
    {
      name: 'time',
      in: 'query',
      description: 'memebr seen time',
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

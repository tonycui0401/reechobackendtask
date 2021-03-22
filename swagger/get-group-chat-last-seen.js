module.exports = {
  tags: ['Get group chat last seen status by the member'],
  description: 'get group last seen status by the member',
  operationId: 'GetGroupChatLastSeen',
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
  ],
  responses: {
    200: {
      description: 'fetch the group chat last seen status by the member'
    }
  }
};

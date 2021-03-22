module.exports = {
  tags: ['Get group chat unseen by the receipt'],
  description: 'get group chat unseen by the receipt',
  operationId: 'GetGroupChatUnseen',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'room',
      in: 'query',
      description: 'receipt user id',
      required: true,
      type: 'integer'
    },
    {
      name: 'seenby',
      in: 'query',
      description: 'message supposed to be seen by a particular member in the group',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'fetch all messages unseen by a member in the group'
    }
  }
};

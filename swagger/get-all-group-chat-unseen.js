module.exports = {
  tags: ['Get all group chat unseen by the receipt'],
  description: 'get all group chat unseen by the receipt',
  operationId: 'GetAllGroupChatUnseen',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
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
      description: 'fetch all messages unseen by a member in all the group'
    }
  }
};

module.exports = {
  tags: ['Get all messages from a group chat'],
  description: 'Fetch all the group chat messages',
  operationId: 'getAllGroupChatMessages',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'room',
      in: 'query',
      description: 'group chat room id',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'fetch all group chat messages'
    }
  }
};

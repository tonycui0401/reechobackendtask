module.exports = {
  tags: ['Get last message from a group chat'],
  description: 'Fetch last message from a group chat',
  operationId: 'getGroupChatMessagesLastMessage',
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
      description: 'fetch group chat last message'
    }
  }
};

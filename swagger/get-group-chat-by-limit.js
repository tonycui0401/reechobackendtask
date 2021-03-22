module.exports = {
  tags: ['Get a group chat messages by limit'],
  description: 'get a group chat messages by limit',
  operationId: 'GetGroupChatByLimit',
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
    },
    {
      name: 'offset',
      in: 'query',
      description: 'message starting from which recorder number',
      required: true,
      type: 'integer'
    },
    {
      name: 'limit',
      in: 'query',
      description: 'how mang messages you want to load',
      required: true,
      type: 'integer'
    },
  ],
  responses: {
    200: {
      description: 'fetch a portion of messages'
    }
  }
};

module.exports = {
  tags: ['Search files in group chat'],
  description: 'search all files from a group chat',
  operationId: 'SearchPrivateChatFiles',
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
      description: 'fetch all files from a group chat channel'
    }
  }
};

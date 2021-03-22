module.exports = {
  tags: ['Search images in group chat'],
  description: 'search all images from a group chat',
  operationId: 'SearchPrivateChatImage',
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
      description: 'fetch all images from a group chat channel'
    }
  }
};

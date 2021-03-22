module.exports = {
  tags: ['Search images in private chat'],
  description: 'search all images from a private chat relevant to a user and a receipt',
  operationId: 'SearchPrivateChatImage',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'sender',
      in: 'query',
      description: 'sender id',
      required: true,
      type: 'integer'
    },
    {
      name: 'receipt',
      in: 'query',
      description: 'receipt id',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'fetch all images from a private chat channel'
    }
  }
};

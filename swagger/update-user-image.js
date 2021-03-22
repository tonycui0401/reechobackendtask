module.exports = {
  tags: ['User Image Update'],
  description: 'update user image',
  operationId: 'updateUserImage',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'user id',
      required: true,
      type: 'string'
    },
    {
      name: 'user_img',
      in: 'query',
      description: 'user image name',
      required: true,
      type: 'string'
    },
  ],
  responses: {
    200: {
      description: 'update image'
    }
  }
};

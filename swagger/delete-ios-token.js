module.exports = {
  tags: ['Delete a user ios device token'],
  description: 'delete the ios device token for a user',
  operationId: 'deleteIosToken',
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
    }
  ],
  responses: {
    200: {
      description: 'show the deleted device token'
    }
  }
};

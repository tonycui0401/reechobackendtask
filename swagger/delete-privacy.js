module.exports = {
  tags: ['Delete your privacy share with a user'],
  description: 'delete the shared privacy with a user',
  operationId: 'deletePrivacy',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'row id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'show the deleted privacy data'
    }
  }
};

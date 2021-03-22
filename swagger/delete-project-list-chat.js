module.exports = {
  tags: ['Delete group chat from a project list'],
  description: 'remove group chat from project list',
  operationId: 'deleteprojectlistchat',
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
      description: 'show the deleted data'
    }
  }
};

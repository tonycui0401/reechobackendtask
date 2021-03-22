module.exports = {
  tags: ['Delete candiate from a project list'],
  description: 'remove candiate from project list',
  operationId: 'deleteJobMemoprojectlist',
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

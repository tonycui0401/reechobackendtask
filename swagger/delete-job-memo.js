module.exports = {
  tags: ['Remove job memo'],
  description: 'delete cjob memo',
  operationId: 'deletejobmemo',
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
      description: 'show the deleted job memo'
    }
  }
};

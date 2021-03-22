module.exports = {
  tags: ['Delete candiate from a job memo'],
  description: 'remove candiate from job memo',
  operationId: 'deleteJobMemo',
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

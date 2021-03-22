module.exports = {
  tags: ['Delete contact from a job memo'],
  description: 'remove contact from job memo',
  operationId: 'deleteJobMemoContact',
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

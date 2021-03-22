module.exports = {
  tags: ['Remove share from a job memo'],
  description: 'remove share from job memo',
  operationId: 'deleteJobMemoShare',
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

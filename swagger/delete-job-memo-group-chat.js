module.exports = {
  tags: ['Delete job memeo group chat from a job memo id'],
  description: 'remove job memeo group chat from job memo',
  operationId: 'deleteJobMemoGroupChat',
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

module.exports = {
  tags: ['Get Job Memo from job id'],
  description: 'Fetch job memo from a job id',
  operationId: 'getJobMemoFromId',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'job id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch job memo by a job id .',
    }
  }
};

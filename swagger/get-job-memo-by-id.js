module.exports = {
  tags: ['Get Job Memo By Id'],
  description: 'Fetch job memo from a particular user',
  operationId: 'getJobMemoById',
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
      description: 'fetch all job memos by a user id .',
    }
  }
};

module.exports = {
  tags: ['Get Job Memo By Slug'],
  description: 'Fetch job memo by slug',
  operationId: 'getJobMemoByIds',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'slug',
      in: 'query',
      description: 'job slug',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all job memos by a slug .',
    }
  }
};

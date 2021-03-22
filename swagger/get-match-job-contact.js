module.exports = {
  tags: ['Get job memos by contact id'],
  description: 'Fetch job memos contact from given user id and job memo id',
  operationId: 'getAlljobsById',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'contact id',
      required: true,
      type: 'string'
    },
    // {
    //   name: 'jid',
    //   in: 'query',
    //   description: 'job memo id',
    //   required: true,
    //   type: 'string'
    // }
  ],
  responses: {
    200: {
      description: 'fetch all records.',
    }
  }
};

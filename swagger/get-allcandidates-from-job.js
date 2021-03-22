module.exports = {
  tags: ['Get All candidates by job memo id'],
  description: 'Fetch all candidates from given job memo id',
  operationId: 'getAllCandidatesById',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'job memo id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all candidates who interested in this job memo.',
      //   content: {
      //     'application/json': {
      //       schema: {
      //         type: 'array',
      //         items: {
      //           user_name: {
      //             type: 'string',
      //             description: 'User Name'
      //           }
      //         }
      //       }
      //     }
      //   }
    }
  }
};

module.exports = {
  tags: ['Get All saved job memos by candidate id'],
  description: 'Fetch all saved job memos from given candidate id',
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
      description: 'candidate id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all jobs saved by this candidate/recruiter.',
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

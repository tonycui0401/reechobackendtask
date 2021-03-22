module.exports = {
  tags: ['Get All shared job memos by receipt id'],
  description: 'Fetch all saved job memos from given receipt id',
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
      description: 'receipt id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all jobs shared',
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

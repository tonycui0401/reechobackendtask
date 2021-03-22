module.exports = {
  tags: ['Get All job memos by group chat id'],
  description: 'Fetch all job memos from given job memo id',
  operationId: 'getAlljobsgroupchatById',
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
      description: 'fetch all jobs memo group chat by job memeo id.',
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

module.exports = {
  tags: ['Get All Project list candidates by Project list id'],
  description: 'Fetch all project list candidates from given project list id',
  operationId: 'getAllProjectListcandidatesById',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'project list id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all project list candidates.',
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

module.exports = {
  tags: ['Get all project list by user who created'],
  description: 'Fetch all project list from the user who created',
  operationId: 'getAllProjectListByuserId',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch all project list by user.',
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

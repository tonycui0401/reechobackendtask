module.exports = {
  tags: ['Get Profile'],
  description: 'Fetch basic profile info',
  operationId: 'getProfile',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch basic profile info.',
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

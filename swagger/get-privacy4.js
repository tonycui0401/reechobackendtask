module.exports = {
  tags: ['Get all the users who give me access to their privacy'],
  description: 'Fetch privacy on any privacy type',
  operationId: 'getPrivacy',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch user based privacy .',
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

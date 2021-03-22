module.exports = {
  tags: ['Get Recruiter Profile'],
  description: 'Fetch basic recruiter profile info',
  operationId: 'getRecruiterProfile',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch basic recruiter profile info.',
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

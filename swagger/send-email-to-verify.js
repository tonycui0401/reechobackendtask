module.exports = {
  tags: ['Send email to verify'],
  description: 'send verify email',
  operationId: 'sendVerify',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'verify email sent',
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

module.exports = {
  tags: ['Get All Privacy by Receipt id'],
  description: 'Fetch all privacies from given receipt id',
  operationId: 'getAllPrivacyById',
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

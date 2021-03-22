module.exports = {
  tags: ['Get Privacy by Receipt id'],
  description: 'Fetch privacy on any privacy type',
  operationId: 'getPrivacy',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'privacy_type',
      in: 'query',
      description: 'privacy type',
      required: true,
      type: 'string'
    },
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

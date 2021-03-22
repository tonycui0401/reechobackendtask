module.exports = {
  tags: ['Get All Project list chats by Project list id'],
  description: 'Fetch all project list chat from given project list id',
  operationId: 'getAllProjectListById',
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
      description: 'fetch all project list chat.',
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

module.exports = {
  tags: ['Send ios user notification by using user id'],
  description: 'Send ios user notification by passing user id',
  operationId: 'sendIosNotificationById',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'user id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'notification sent .',
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

module.exports = {
  tags: ['Get All Email Verified Users'],
  description: 'Fetch all the email verified users',
  operationId: 'getAllVerifiedUsers',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch all verified users',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              tag_name: {
                type: 'string',
                description: 'User name'
              },
            }
          }
        }
      }
    }
  }
};

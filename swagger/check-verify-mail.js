module.exports = {
  tags: ['Check Verified Mail'],
  description: 'Chck if email is verified',
  operationId: 'CheckVerifyMail',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'email',
      in: 'query',
      description: 'user email address',
      required: true,
      type: 'string'
    },
  ],
  responses: {
    200: {
      description: 'fetch email verification status.'
    }
  }
};

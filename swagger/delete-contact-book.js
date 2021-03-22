module.exports = {
  tags: ['Remove user from your contact book'],
  description: 'delete the user from contact',
  operationId: 'deleteContact',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'row id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'show the deleted user contact details'
    }
  }
};

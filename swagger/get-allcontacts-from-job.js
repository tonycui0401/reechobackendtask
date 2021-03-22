module.exports = {
  tags: ['Get All contacts by job memo id'],
  description: 'Fetch all contacts from given job memo id',
  operationId: 'getAllContactsById',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'job memo id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all contacts from this job memo.',
    }
  }
};

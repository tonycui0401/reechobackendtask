module.exports = {
  tags: ['job memo keyowrds search'],
  description: 'search any keywords matching in job memos',
  operationId: 'SearchjobmemoKeywords',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'search',
      in: 'query',
      description: 'search term',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all matched results'
    }
  }
};

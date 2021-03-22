module.exports = {
  tags: ['job memo keyowrds search by limit'],
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
    },
    {
      name: 'offset',
      in: 'query',
      description: 'message starting from which recorder number',
      required: true,
      type: 'integer'
    },
    {
      name: 'limit',
      in: 'query',
      description: 'how mang messages you want to load',
      required: true,
      type: 'integer'
    },
  ],
  responses: {
    200: {
      description: 'fetch all matched results'
    }
  }
};

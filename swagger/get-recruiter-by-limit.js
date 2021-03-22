module.exports = {
  tags: ['Get all recruiters by limit'],
  description: 'get all recruiters by pagination',
  operationId: 'GetrecruiterstByLimit',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
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
      description: 'fetch a portion of messages'
    }
  }
};

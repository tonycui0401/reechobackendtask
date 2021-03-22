module.exports = {
  tags: ['Recruiter keyowrds search by limit'],
  description: 'search any keywords matching in recruiter profile, experience, roles, questions',
  operationId: 'SearchRecruiterKeywords',
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

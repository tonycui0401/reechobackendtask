module.exports = {
  tags: ['Recruiter keyowrds search'],
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
    }
  ],
  responses: {
    200: {
      description: 'fetch all matched results'
    }
  }
};

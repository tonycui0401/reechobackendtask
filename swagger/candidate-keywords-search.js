module.exports = {
  tags: ['Candidate keyowrds search'],
  description: 'search any keywords matching in candidate profile, experience, education, questions',
  operationId: 'SearchCandidateKeywords',
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

module.exports = {
  tags: ['Candidate profile by id'],
  description: 'fetch candidate profile, experience, education, questions from given id',
  operationId: 'SearchCandidateProfiles',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'user id',
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

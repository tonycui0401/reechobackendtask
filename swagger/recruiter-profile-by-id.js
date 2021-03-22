module.exports = {
  tags: ['Recruiter profile by id'],
  description: 'fetch recruiter profile, experience, education, questions from given id',
  operationId: 'SearchRecruiterProfiles',
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

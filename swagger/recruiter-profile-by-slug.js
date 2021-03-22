module.exports = {
  tags: ['Recruiter profile by slug'],
  description: 'fetch recruiter profile, experience, education, questions from given slug',
  operationId: 'SearchRecruiterProfilesss',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'slug',
      in: 'query',
      description: 'user slug',
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

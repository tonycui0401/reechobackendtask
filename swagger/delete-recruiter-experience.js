module.exports = {
  tags: ['Remove recruiter experience'],
  description: 'delete recruiter experience',
  operationId: 'deleteRecruiterExperience',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'row id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'show the deleted recruiter experience'
    }
  }
};

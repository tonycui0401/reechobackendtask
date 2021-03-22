module.exports = {
  tags: ['Remove candidate experience'],
  description: 'delete candidate experience',
  operationId: 'deleteCandidateExperience',
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
      description: 'show the deleted candidate experience'
    }
  }
};

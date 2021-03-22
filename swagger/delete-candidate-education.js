module.exports = {
  tags: ['Remove candidate education'],
  description: 'delete candidate education',
  operationId: 'deleteCandidateEducation',
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
      description: 'show the deleted candidate education'
    }
  }
};

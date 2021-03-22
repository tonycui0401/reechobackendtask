module.exports = {
  tags: ['Get All collaborators by job memo id'],
  description: 'Fetch all collaborators from given job memo id',
  operationId: 'getAllcollaboratorsById',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'job memo id',
      required: true,
      type: 'string'
    }
  ],
  responses: {
    200: {
      description: 'fetch all collaborators from this job memo.',
    }
  }
};

module.exports = {
  tags: ['Delete collaborator from a job memo'],
  description: 'remove collaborator from job memo',
  operationId: 'deleteJobMemoCollaborator',
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
      description: 'show the deleted data'
    }
  }
};

module.exports = {
  tags: ['Delete collaborator from a project list'],
  description: 'remove collaborator from project list',
  operationId: 'deleteJobMemoprojectlistcollaborator',
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

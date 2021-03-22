/* eslint-disable no-undef */
module.exports = {
  tags: ['Add a project list collaborator'],
  description: 'Add a collaborator to a project list',
  operationId: 'saveprojectlistcollaborator',
  security: [
    {
      bearerAuth: []
    }
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            collaborator_id: {
              description: 'collaborator id',
              type: 'integer'
            },
            project_list_id: {
              description: 'project list id',
              type: 'integer'
            },
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'add successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

/* eslint-disable no-undef */
module.exports = {
  tags: ['Add a project list candidate'],
  description: 'Add a candidate to a project list',
  operationId: 'saveprojectlistcandidate',
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
            candidate_id: {
              description: 'candidate id',
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

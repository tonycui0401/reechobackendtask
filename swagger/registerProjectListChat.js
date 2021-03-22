/* eslint-disable no-undef */
module.exports = {
  tags: ['Add a project list chat'],
  description: 'Add a group chat a project list',
  operationId: 'saveprojectlistgroupchat',
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
            group_chat_id: {
              description: 'group chat id',
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

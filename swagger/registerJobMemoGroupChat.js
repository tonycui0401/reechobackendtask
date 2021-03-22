/* eslint-disable no-undef */
module.exports = {
  tags: ['Add a job memo group chat'],
  description: 'Add a group chat to job memo',
  operationId: 'savejobmmemogroupchat',
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
            job_memo_id: {
              description: 'job memo id',
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

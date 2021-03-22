/* eslint-disable no-undef */
module.exports = {
  tags: ['Add a job memo collaborator'],
  description: 'Add a collaborator to a job memo',
  operationId: 'savejobmemocollaborator',
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
              description: 'collaborator user id that you want to add to the memo',
              type: 'integer'
            },
            job_memo_id: {
              description: 'job memo id candidate want to add collaborator to',
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

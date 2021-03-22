/* eslint-disable no-undef */
module.exports = {
  tags: ['Add a job memo contact'],
  description: 'Add a contact to a job memo',
  operationId: 'savejobmemocontact',
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
            contact_id: {
              description: 'contact user id that you want to add to the memo',
              type: 'integer'
            },
            job_memo_id: {
              description: 'job memo id candidate want to add contact to',
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

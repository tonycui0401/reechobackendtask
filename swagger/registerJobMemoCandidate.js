/* eslint-disable no-undef */
module.exports = {
  tags: ['add new candidate for a particular job memo'],
  description: 'candidate add interests to a job memo',
  operationId: 'registerjobmemocandidate',
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
              description: 'candidate user id that you want to add to the memo',
              type: 'integer'
            },
            job_memo_id: {
              description: 'job memo id candidate interests in',
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

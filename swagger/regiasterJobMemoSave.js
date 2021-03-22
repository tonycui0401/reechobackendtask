/* eslint-disable no-undef */
module.exports = {
  tags: ['Save a job memo'],
  description: 'candidate/recruiter save a job memo',
  operationId: 'savejobmemocandidate',
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
            job_memo_id: {
              description: 'job memo id candidate want to save',
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

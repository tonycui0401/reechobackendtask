/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Job Memo Share'],
  description: 'create a new job memo share',
  operationId: 'registerjobmemoshare',
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
            channel_type: {
              description: '',
              type: 'string'
            },
            channel_id: {
              description: '',
              type: 'int'
            },
            job_memo_id: {
              description: '',
              type: 'int'
            },
            receipt_id: {
              description: '',
              type: 'int'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'register successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

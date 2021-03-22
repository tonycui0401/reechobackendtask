/* eslint-disable no-undef */
module.exports = {
  tags: ['Job Memo Update'],
  description: 'update job memo',
  operationId: 'updateJobMemo',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'job memo id',
      required: true,
      type: 'string'
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            title: {
              description: '',
              type: 'string'
            },
            status: {
              description: '',
              type: 'string'
            },
            company: {
              description: '',
              type: 'string'
            },
            short_description: {
              description: '',
              type: 'string'
            },
            long_description: {
              description: '',
              type: 'string'
            },
            job_tags: {
              description: '',
              type: 'string'
            },
            benefit_tags: {
              description: 'your privacy',
              type: 'string'
            },
            referral_fee: {
              description: '',
              type: 'string'
            },
            posttoreecho: {
              description: '',
              type: 'boolean'
            },
            jobmemoimg: {
              description: '',
              type: 'string'
            },
            approval_date: {
              description: '',
              type: 'bigint'
            },
            location: {
              description: '',
              type: 'string'
            },
            job_memo_status: {
              description: '',
              type: 'string'
            },
            job_memo_visible: {
              description: '',
              type: 'string'
            },
            internal_message: {
              description: '',
              type: 'string'
            },
            project_list_id: {
              description: '',
              type: 'int'
            },
            collaborator_chat_id: {
              description: '',
              type: 'int'
            },
            jobslug: {
              description: '',
              type: 'string'
            },
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'update successful'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

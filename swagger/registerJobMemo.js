/* eslint-disable no-undef */
module.exports = {
  tags: ['Register Job Memo'],
  description: 'create a new job memo',
  operationId: 'registerjobmemo',
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
            createdat: {
              description: '',
              type: 'int'
            },
            posttoreecho: {
              description: '',
              type: 'boolean'
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

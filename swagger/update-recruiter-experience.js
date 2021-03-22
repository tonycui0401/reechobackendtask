/* eslint-disable no-undef */
module.exports = {
  tags: ['Recruiter Experience Update'],
  description: 'update recruiter',
  operationId: 'updateRecruiter',
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
            job_title: {
              description: 'your job title',
              type: 'string'
            },
            company: {
              description: 'your company',
              type: 'string'
            },
            start_date: {
              description: 'your start date',
              type: 'string'
            },
            end_date: {
              description: 'your end date',
              type: 'string'
            },
            working_type: {
              description: 'your working type',
              type: 'string'
            },
            company_pic: {
              description: 'your company picture',
              type: 'string'
            }
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

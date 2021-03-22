/* eslint-disable no-undef */
module.exports = {
  tags: ['Recruiter Roles Update'],
  description: 'update recruiter',
  operationId: 'updateRecruiter',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'role id',
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
            experience: {
              description: 'your job experience',
              type: 'string'
            },
            roles: {
              description: 'your roles',
              type: 'string'
            },
            contract_type: {
              description: 'your contract type',
              type: 'string'
            },
            clients: {
              description: 'your clients',
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

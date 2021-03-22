/* eslint-disable no-undef */
module.exports = {
  tags: ['Chat Group detail update'],
  description: 'update group chat name, image',
  operationId: 'updateGroupChat',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'group chat id',
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
            name: {
              description: 'group chat name',
              type: 'string'
            },
            image: {
              description: 'group chat image name',
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

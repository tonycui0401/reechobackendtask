module.exports = {
  tags: ['Get All Tags'],
  description: 'Fetch hear about tags',
  operationId: 'getAllTags',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch basic user info.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              tag_name: {
                type: 'string',
                description: 'Tag Name'
              },
            }
          }
        }
      }
    }
  }
};

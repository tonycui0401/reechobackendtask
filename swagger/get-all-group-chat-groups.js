module.exports = {
  tags: ['Get All Group Chat groups'],
  description: 'Fetch all the group chat groups',
  operationId: 'getAllGroupChatGroups',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    200: {
      description: 'fetch all group chat groups',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              tag_name: {
                type: 'string',
                description: 'Group chat groups name'
              },
            }
          }
        }
      }
    }
  }
};

module.exports = {
  tags: ['Create Group chat Member'],
  description: 'Add member to group chat',
  operationId: 'CreatGroupChatGroupMember',
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
            room: {
              description: 'room id',
              type: 'integer'
            },
            member: {
              description: 'group member id',
              type: 'integer'
            },
            joindate: {
              description: 'member join date',
              type: 'integer'
            },
            membertype: {
              description: 'member type can be admin or normal',
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'tag created successfully'
    },
    405: {
      description: 'unauthoried'
    }
  },

};

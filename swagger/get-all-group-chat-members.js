module.exports = {
  tags: ['Get all members from a group chat'],
  description: 'Fetch all the group chat members',
  operationId: 'getAllGroupChatGroups',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'room',
      in: 'query',
      description: 'group chat room id',
      required: true,
      type: 'integer'
    }
  ],
  responses: {
    200: {
      description: 'fetch all group chat members'
    }
  }
};

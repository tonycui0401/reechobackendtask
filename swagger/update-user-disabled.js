/* eslint-disable no-undef */
module.exports = {
  tags: ['User Update disabled'],
  description: 'update user disabled status',
  operationId: 'updateUserDisabled',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'user id',
      required: true,
      type: 'string'
    }
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            disabled: {
              description: 'updater disabled status',
              type: 'boolean'
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


// module.exports = {
//   tags: ['User Update'],
//   description: 'update user',
//   operationId: 'updateUser',
//   security: [
//     {
//       bearerAuth: []
//     }
//   ],
//   parameters: [
//     {
//       name: 'id',
//       in: 'path',
//       description: 'user id',
//       required: true,
//       type: 'string'
//     }
//   ],
//   properties: {
//     email: {
//       description: 'your email',
//       type: 'string'
//     },
//     password: {
//       description: 'your password',
//       type: 'string'
//     },
//     firstname: {
//       description: 'your firstname',
//       type: 'string'
//     },
//     lastname: {
//       description: 'your lastname',
//       type: 'string'
//     },
//     phone: {
//       description: 'your phone',
//       type: 'string'
//     },
//     city: {
//       description: 'your city',
//       type: 'string'
//     },
//     country: {
//       description: 'your country',
//       type: 'string'
//     },
//     userimg: {
//       description: 'your image name',
//       type: 'string'
//     },
//   },
//   responses: {
//     200: {
//       description: 'update image'
//     }
//   }
// };

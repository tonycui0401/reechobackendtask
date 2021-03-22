/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */

/* eslint-disable consistent-return */
/* eslint-disable radix */
const Router = require('express-promise-router');

const _ = require('lodash');

// const app = require('../../app');

module.exports = (app) => {
//   app.use(cors());
  const router = Router();

  const auth = require('../../components/auth/helpers');
  const private_chat = require('../../components/chat/private')(app);
  const private_chat_last = require('../../components/chat/private_last')(app);
  const group_chat_last = require('../../components/chat/group_last')(app);
  const group_chat = require('../../components/chat/group')(app);
  const chat_list = require('../../components/chat/chatlist')(app);
  const chat_list_receipt = require('../../components/chat/chatlist')(app);
  const users = require('../../components/users')(app);


  router.get('/privateChat', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat.get(sender, receipt);
    res.json(data);
  });


  router.get('/privateChatLimit', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    const data = await private_chat.getLimit(sender, receipt, offset, limit);
    res.json(data);
  });


  router.post('/createGroupLastChannel', async (req, res) => {
    const checkGroupChannel = await group_chat_last.getOneByGroupId(parseInt(req.body.group_id));
    // res.json(checkGroupChannel);

    if (checkGroupChannel.length === 0) {
      const data = await group_chat_last.create(_.pick(req.body, 'group_id'));
      res.json(data);
    }
  });

  router.post('/createPrivateLastChannel', async (req, res) => {
    const checkPrivateChannel = await private_chat_last.getOneByUserId(parseInt(req.body.user1), parseInt(req.body.user2));

    // res.json(checkPrivateChannel);
    if (checkPrivateChannel.length === 0) {
      const data = await private_chat_last.create(_.pick(req.body, 'user1', 'user2'));
      res.json(data);
    }
  });


  router.put('/updatePrivateLastChannelStatus', async (req, res) => {
    // res.json(checkPrivateChannel);
    // if (checkPrivateChannel.length === 0) {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat_last.updateSeen(sender, receipt);
    res.json(data);
    // res.json(data);
  //  }
  });


  router.put('/updatePrivateLastChannel', async (req, res) => {
    const sender = parseInt(req.body.sender);
    const receipt = parseInt(req.body.receipt);
    const message = req.body.message;
    const time = parseInt(req.body.time);
    const type = req.body.type;
    const message_id = parseInt(req.body.message_id);
    // const data = await private_chat_last.update(_.pick(req.body, 'sender', 'receipt', 'message', 'time', 'type', 'message_id'));
    const data = await private_chat_last.update(sender, receipt, message, time, type, message_id);
    res.json(data);
    // console.log(_.pick(req.body, 'sender', 'receipt', 'message', 'time', 'type', 'message_id'));
    // res.json(`${sender} ${receipt} ${message} ${time} ${type}`);
  });

  router.get('/privateLastChannel', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await private_chat_last.get(id);
    res.json(data);
    // res.json(`${sender} ${receipt} ${message} ${time} ${type}`);
  });


  router.get('/groupLastChannel', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await group_chat_last.get(id);
    res.json(data);
    // res.json(`${sender} ${receipt} ${message} ${time} ${type}`);
  });


  router.put('/updateGroupLastChannel', async (req, res) => {
    const group_id = parseInt(req.body.group_id);
    const sender = parseInt(req.body.sender);
    const message = req.body.message;
    const time = parseInt(req.body.time);
    const type = req.body.type;
    const message_id = parseInt(req.body.message_id);
    const data = await group_chat_last.update(group_id, sender, message, time, type, message_id);
    res.json(data);
    // res.json(`${sender} ${receipt} ${message} ${time} ${type}`);
  });


  router.post('/createPrivateChat', async (req, res) => {
    const data = await private_chat.create(_.pick(req.body, 'sender', 'receipt', 'message', 'time', 'type'));
    res.json(data);
  });


  router.get('/privateChatUnseen', async (req, res) => {
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat.getUnseen(receipt);
    res.json(data);
  });

  router.get('/privateChatLastSeen', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat.getLastSeen(sender, receipt);
    res.json(data);
  });

  router.get('/privateChatLastMessage', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat.getLastMessage(sender, receipt);
    res.json(data);
  });

  router.get('/groupChatLastMessage', async (req, res) => {
    const room = parseInt(req.query.room);
    // const receipt = parseInt(req.query.receipt);
    const data = await group_chat.getLastMessage(room);
    res.json(data);
  });


  // router.get('/allPrivateChatLastMessage', async (req, res) => {
  //   const sender = parseInt(req.query.sender);
  //   const receipt = parseInt(req.query.receipt);
  //   const data = await private_chat.getAllLastMessage(sender, receipt);
  //   res.json(data);
  // });


  router.put('/updatePrivateChatSatus', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const time = parseInt(req.query.time);
    const data = await private_chat.update(time, sender, receipt);
    res.json(data);
  });


  router.put('/addPrivateChatStarredSatus', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await private_chat.addStarred(id);
    res.json(data);
  });

  router.put('/removePrivateChatStarredSatus', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await private_chat.removeStarred(id);
    res.json(data);
  });

  router.put('/addGroupChatStarredSatus', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await group_chat.addStarred(id);
    res.json(data);
  });

  router.put('/removeGroupChatStarredSatus', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await group_chat.removeStarred(id);
    res.json(data);
  });

  router.post('/createChatList', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'title');
    const data = await chat_list.create_chat_list(req.user, params);
    res.json(data);
  });


  router.post('/createChatListReceipt', auth.authenticate, async (req, res) => {
    const data = await chat_list_receipt.create_chat_list_receipt(_.pick(req.body, 'chat_list_id', 'receipt_type', 'receipt_id'));
    res.json(data);
  });

  router.put('/updateChatList', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const params = _.pick(req.body, 'title');
    const data = await chat_list.updateChatList(id, params);
    res.json(data);
  });


  router.delete('/deleteChatListReceipt', auth.authenticate, async (req, res) => {
    const data = await chat_list_receipt.deleteChatListReceipt(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteChatList', auth.authenticate, async (req, res) => {
    const data = await chat_list.deleteChatList(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/viewChatList', auth.authenticate, async (req, res) => {
    const data = await chat_list.getChatList(req.user);
    res.json(data);
  });

  router.get('/viewChatListReceipt', auth.authenticate, async (req, res) => {
    const data = await chat_list_receipt.getChatListReceipt(parseInt(req.query.id));
    res.json(data);
  });

  router.post('/createChatGroup', async (req, res) => {
    const data = await group_chat.create_chat_group(_.pick(req.body, 'name', 'createdby'));
    res.json(data);
  });

  router.put('/updateChatGroup', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await group_chat.update_chat_group(id, _.pick(req.body, 'name', 'image'));
    res.json(data);
  });


  router.post('/createChatGroupMember', async (req, res) => {
    const data = await group_chat.create_chat_group_member(_.pick(req.body, 'room', 'member', 'joindate', 'membertype'));
    res.json(data);
  });

  router.post('/createChatGroupMsg', async (req, res) => {
    const data = await group_chat.create_chat_group_msg(_.pick(req.body, 'room', 'sender', 'message', 'time', 'type'));
    res.json(data);
  });

  router.post('/createChatGroupMsgStatus', async (req, res) => {
    const data = await group_chat.create_chat_group_msg_status(_.pick(req.body, 'msg_id', 'seenby', 'seenat', 'status'));
    res.json(data);
  });

  router.get('/chatGroupsMsg', async (req, res) => {
    const room = parseInt(req.query.room);
    const data = await group_chat.get_chat_group_msg(room);
    res.json(data);
  });

  router.get('/chatGroupsMsgLimit', async (req, res) => {
    const room = parseInt(req.query.room);
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    const data = await group_chat.get_chat_group_msg_limit(room, offset, limit);
    res.json(data);
  });

  router.get('/allChatGroups', async (req, res) => {
    const data = await group_chat.get_all_chat_groups();
    res.json(data);
  });


  router.get('/allChatGroupMembers', async (req, res) => {
    const room = parseInt(req.query.room);
    const data = await group_chat.get_chat_group_members(room);
    res.json(data);
  });

  router.get('/allChatGroupMsgStatus', async (req, res) => {
    const room = parseInt(req.query.room);
    const member = parseInt(req.query.member);
    const data = await group_chat.get_chat_group_msg_status_per_member(room, member);
    res.json(data);
  });

  router.get('/groupChatUnseen', async (req, res) => {
    const seenby = parseInt(req.query.seenby);
    const room = parseInt(req.query.room);
    const data = await group_chat.getUnseen(seenby, room);
    res.json(data);
  });

  router.get('/allGroupChatUnseen', async (req, res) => {
    const seenby = parseInt(req.query.seenby);
    const data = await group_chat.getAllUnseen(seenby);
    res.json(data);
  });

  router.put('/updateGroupChatSatus', async (req, res) => {
    const seenby = parseInt(req.query.seenby);
    const room = parseInt(req.query.room);
    const time = parseInt(req.query.time);
    const data = await group_chat.updateUnseen(time, seenby, room);
    res.json(data);
  });


  router.get('/groupChatLastSeen', async (req, res) => {
    const seenby = parseInt(req.query.seenby);
    const room = parseInt(req.query.room);
    const data = await group_chat.getLastSeen(seenby, room);
    res.json(data);
  });

  router.put('/updateUserChatStatus', async (req, res) => {
    const id = parseInt(req.query.id);
    const chatstatus = req.query.chatstatus;
    const data = await users.updateUserChatStatus(id, chatstatus);
    res.json(data);
  });


  router.get('/privateChatSearch', async (req, res) => {
    const search = req.query.search;
    const sender = parseInt(req.query.sender);
    console.log(search);
    const data = await private_chat.searchChat(search, sender);
    res.json(data);
  });


  // router.get('/privateChatChannelSearch', async (req, res) => {
  //   const data = await private_chat.searchChatChannel(search, sender);
  //   res.json(data);
  // });

  // router.get('/groupChatChannelSearch', async (req, res) => {
  //   const search = req.query.search;
  //   const data = await private_chat.searchChatChannel(search, sender);
  //   res.json(data);
  // });

  router.get('/privateChatSearchImages', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat.searchChatImages(sender, receipt);
    res.json(data);
  });

  router.get('/privateChatSearchFiles', async (req, res) => {
    const sender = parseInt(req.query.sender);
    const receipt = parseInt(req.query.receipt);
    const data = await private_chat.searchChatFiles(sender, receipt);
    res.json(data);
  });

  router.get('/groupChatSearch', async (req, res) => {
    const search = req.query.search;
    // const sender = parseInt(req.query.sender);
    const data = await group_chat.searchChat(search);
    res.json(data);
  });

  router.get('/groupChatSearchImages', async (req, res) => {
    const room = parseInt(req.query.room);
    const data = await group_chat.searchChatImages(room);
    res.json(data);
  });

  router.get('/groupChatSearchFiles', async (req, res) => {
    const room = parseInt(req.query.room);
    const data = await group_chat.searchChatFiles(room);
    res.json(data);
  });

  return router;
};

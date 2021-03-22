/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const {
    chat_list, chat_list_receipt
  } = db;

  const module = {};

  module.getChatList = async user => db.query(`select * from users u inner join chat_list cl ON cl.user_id=u.id where cl.user_id = ${user.id}`);


  module.getChatListReceipt = async id => db.query(`select * from chat_list cl inner join chat_list_receipt clr ON clr.chat_list_id=cl.id where cl.id = ${id}`);

  // Create
  module.create_chat_list = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return chat_list.save({ ...row, user_id: user.id });
  };


  module.create_chat_list_receipt = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return chat_list_receipt.save({ ...row });
  };

  module.updateChatList = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return chat_list.save(row);
  };

  // module.updateChatListReceipt = async (id, row) => {
  //   if (!Number(id)) throw new Error('No id given');
  //   row.id = id;
  //   return chat_list_receipt.save(row);
  // };

  // Delete
  module.deleteChatList = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return chat_list.destroy({ id });
  };

  // Delete
  module.deleteChatListReceipt = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return chat_list_receipt.destroy({ id });
  };


  return module;
};

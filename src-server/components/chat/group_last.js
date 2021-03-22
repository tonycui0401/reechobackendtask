/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { group_last_message } = db;
  const module = {};

  // Create
  module.create = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return group_last_message.save({ ...row });
  };

  module.getOneByGroupId = async id => db.query(`select * from group_last_message where group_id = ${id}`);
  //   module.get = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time asc`);

  module.update = async (group_id, sender, message, time, type, message_id) => db.query(`update group_last_message set room = ${group_id}, sender = ${sender}, message = '${message}', time = ${time}, type = '${type}', message_id = ${message_id} where group_id = ${group_id}`);

  module.get = async id => db.query(`select * from chat_group_msg_status cgms inner join group_last_message glm on cgms.msg_id = glm.message_id where cgms.seenby = ${id}`);

  // module.updateSeen = async (sender, receipt) => db.query(`update group_last_message set status = 'seen' where user1 = ${sender} and user2 = ${receipt} or user1 = ${receipt} and user2 = ${sender}`);

  // module.getUnseen = async id => db.query(`select * from group_last_message glm inner join chat_group_msg_status cgms on cgms.msg_id = glm.message_id where cgms.seenby = ${id} and cgms.status = 'unseen'`);


  module.getUnseen = async id => db.query(`select * from chat_group_msg cgm inner join chat_group_msg_status cgms on cgm.id = cgms.msg_id where seenby = ${id} and status = 'unseen'`);


  //   module.update = async (time, sender, receipt) => db.query(`update private_chat set status = 'seen', seenat= ${time} where sender = ${sender} and receipt = ${receipt} and status = 'unseen'`);


  return module;
};

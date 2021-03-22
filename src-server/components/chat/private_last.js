/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { private_last_message } = db;
  const module = {};

  // Create
  module.create = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return private_last_message.save({ ...row });
  };

  module.getOneByUserId = async (sender, receipt) => db.query(`select * from private_last_message where user1 = ${sender} and user2 = ${receipt} or user1 = ${receipt} and user2 = ${sender}`);

  // module.update = async (sender, receipt, message, time, type) => db.query(`update private_last_message set sender = ${sender}, receipt = ${receipt}, message = '${message}', time = ${time}, type = '${type}' where user1 = ${sender} and user2 = ${receipt} or user1 = ${receipt} and user2 = ${sender}`);

  module.update = async (sender, receipt, message, time, type, message_id) => db.query(`update private_last_message set sender = ${sender}, receipt = ${receipt}, message = '${message}', time = ${time}, type = '${type}', message_id = ${message_id} where user1 = ${sender} and user2 = ${receipt} or user1 = ${receipt} and user2 = ${sender}`);


  module.get = async id => db.query(`select * from private_chat pc inner join private_last_message plm  on pc.id = plm.message_id where user1 = ${id} or user2 = ${id}`);
  // module.update = async (sender, receipt, message, time, type) => db.query("update private_last_message set sender = 77, receipt = 54, message= 'hello', time= 12343444, type= 'text' where user1 = 77 and user2 = 54 or user1 = 54 and user2 = 77");

  // module.getUnseen = async id => db.query(`select * from private_last_message plm inner join private_chat pc on pc.id = plm.message_id where (user1 = ${id} or user2 = ${id}) and pc.status = 'unseen'`);

  module.getUnseen = async id => db.query(`select * from private_chat where receipt = ${id} and status = 'unseen'`);


  // module.searchChatChannel = async (search, sender) => db.query('SELECT * from private_chat WHERE (sender = ' + sender + ' or receipt = ' + sender + ") and type != 'image' and LOWER(message) ILIKE '%' || $1 || '%'", [search.toLowerCase()]);

  //   module.get = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time asc`);


  //   module.update = async (time, sender, receipt) => db.query(`update private_chat set status = 'seen', seenat= ${time} where sender = ${sender} and receipt = ${receipt} and status = 'unseen'`);


  module.updateSeen = async (sender, receipt) => db.query(`update private_last_message set status = 'seen' where user1 = ${sender} and user2 = ${receipt} or user1 = ${receipt} and user2 = ${sender}`);


  return module;
};

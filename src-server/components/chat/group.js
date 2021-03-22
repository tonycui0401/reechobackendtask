/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const {
    chat_group, chat_group_member, chat_group_msg, chat_group_msg_status
  } = db;

  const module = {};

  // Create
  module.create_chat_group = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return chat_group.save({ ...row });
  };

  module.create_chat_group_member = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return chat_group_member.save({ ...row });
  };

  module.create_chat_group_msg = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return chat_group_msg.save({ ...row });
  };

  module.create_chat_group_msg_status = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return chat_group_msg_status.save({ ...row });
  };


  module.get_all_chat_groups = async () => db.query('select * from chat_group');

  module.get_chat_groups_by_member = async member_id => db.query(`select * from chat_group where member = ${member_id}`);

  module.get_chat_group_msg = async room => db.query(`select * from chat_group_msg where room =${room} order by time ASC`);

  module.get_chat_group_msg_limit = async (room, offset, limit) => db.query(`select * from chat_group_msg where room =${room} order by time DESC offset ${offset} limit ${limit}`);

  module.get_chat_group_members = async room => db.query(`select * from users u inner join chat_group_member c ON c.member=u.id where c.room = ${room}`);

  module.get_chat_group_msg_status_per_member = async (room, member) => db.query(`select * from chat_group_msg c inner join chat_group_msg_status j ON c.id=j.msg_id where room = ${room} and seenby = ${member} order by time ASC`);

  module.getUnseen = async (seenby, room) => db.query(`select * from chat_group_msg cgm inner join chat_group_msg_status cgms on cgm.id = cgms.msg_id where seenby = ${seenby} and room = ${room} and status = 'unseen'`);

  module.getAllUnseen = async seenby => db.query(`select * from chat_group_msg cgm inner join chat_group_msg_status cgms on cgm.id = cgms.msg_id where seenby = ${seenby} and status = 'unseen'`);

  module.updateUnseen = async (time, seenby, room) => db.query(`update chat_group_msg_status set status = 'seen', seenat= ${time} from chat_group_msg where seenby = ${seenby} and room = ${room} and status = 'unseen' and chat_group_msg.id = chat_group_msg_status.msg_id`);

  module.getLastSeen = async (seenby, room) => db.query(`select * from chat_group_msg_status inner join chat_group_msg on chat_group_msg.id = chat_group_msg_status.msg_id where seenby = ${seenby} and room = ${room} and status = 'seen' order by time DESC LIMIT 1`);

  module.addStarred = async id => db.query(`update chat_group_msg set starred = true where id = ${id}`);

  module.removeStarred = async id => db.query(`update chat_group_msg set starred = false where id = ${id}`);

  module.searchChat = async search => db.query("SELECT * from chat_group_msg WHERE type != 'image' and LOWER(message) ILIKE '%' || $1 || '%'", [search.toLowerCase()]);

  module.searchChatImages = async room => db.query("SELECT * from chat_group_msg WHERE room = " + room + " and ((type = 'image' and message like '%.jpg%') or (type = 'image' and message like '%.png%') or (type = 'image' and message like '%.jpeg%')) order by time desc");

  module.searchChatFiles = async room => db.query("SELECT * from chat_group_msg WHERE room = " + room + " and ((type = 'image' and message not like '%.jpg%') and (type = 'image' and message not like '%.png%') and (type = 'image' and message not like '%.jpeg%')) order by time desc");

  module.getLastMessage = async room => db.query(`select * from chat_group_msg where room =${room} order by time desc limit 1`);

  module.update_chat_group = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return chat_group.save(row);
  };


  // module.getLastMessage = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time desc limit 1`);

  // update chat_group_msg_status set status = 'seen', seenat = 1598146408075 from chat_group_msg where seenby = 78 and room = 1 and status = 'unseen' and chat_group_msg.id = chat_group_msg_status.msg_id
  //   module.update = async (id, row) => {
  //     if (!Number(id)) throw new Error('No id given');
  //     row.id = id;
  //     return candidate_benefit.save(row);
  //   };


  //   module.getOne = async user => db.query(`select * from users u inner join candidate_benefit c ON c.user_id=u.id where user_id = ${user.id}`);

  //   module.get = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time asc`);


  //   module.delete = async (id) => {
  //     if (!Number(id)) throw new Error('No id given');
  //     return candidate_benefit.destroy({ id });
  //   };


  return module;
};

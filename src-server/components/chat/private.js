/* eslint-disable prefer-template */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { private_chat } = db;
  const module = {};

  // Create
  module.create = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return private_chat.save({ ...row });
  };

  //   module.update = async (id, row) => {
  //     if (!Number(id)) throw new Error('No id given');
  //     row.id = id;
  //     return candidate_benefit.save(row);
  //   };


  //   module.getOne = async user => db.query(`select * from users u inner join candidate_benefit c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time asc`);


  module.getUnseen = async receipt => db.query(`select * from private_chat where receipt = ${receipt} and status = 'unseen'`);


  module.getLastSeen = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} and status = 'seen' order by time DESC LIMIT 1`);

  module.update = async (time, sender, receipt) => db.query(`update private_chat set status = 'seen', seenat= ${time} where sender = ${sender} and receipt = ${receipt} and status = 'unseen'`);

  module.addStarred = async id => db.query(`update private_chat set starred = true where id = ${id}`);

  module.removeStarred = async id => db.query(`update private_chat set starred = false where id = ${id}`);

  module.getLimit = async (sender, receipt, offset, limit) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time desc offset ${offset} limit ${limit}`);

  // eslint-disable-next-line prefer-template
  // const str = "SELECT * from private_chat WHERE message ILIKE '%hi%'";
  // const res = str.replace('hi', search);

  // eslint-disable-next-line quotes
  module.searchChat = async (search, sender) => db.query("SELECT * from private_chat WHERE (sender = " + sender + " or receipt = " + sender + ") and type != 'image' and LOWER(message) ILIKE '%' || $1 || '%'", [search.toLowerCase()]);
  // db.query('SELECT * from private_chat WHERE message LIKE $1', ["\'%" + search + "%\'"])

  // eslint-disable-next-line quotes
  module.searchChatImages = async (sender, receipt) => db.query("select * from private_chat where ((sender = " + sender + " and receipt = " + receipt + ") or (sender = " + receipt + " and receipt = " + sender + ")) and ((type = 'image' and message like '%.jpg%') or (type = 'image' and message like '%.png%') or (type = 'image' and message like '%.jpeg%')) order by time desc");

  // eslint-disable-next-line quotes
  module.searchChatFiles = async (sender, receipt) => db.query("select * from private_chat where ((sender = " + sender + " and receipt = " + receipt + ") or (sender = " + receipt + " and receipt = " + sender + ")) and ((type = 'image' and message not like '%.jpg%') and (type = 'image' and message not like '%.png%') and (type = 'image' and message not like '%.jpeg%')) order by time desc");

  module.getLastMessage = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time desc limit 1`);

  module.getAllLastMessage = async (sender, receipt) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time desc limit 1`);
  // db.query(sql, columnNamePattern, function(error, result){

  //   module.delete = async (id) => {
  //     if (!Number(id)) throw new Error('No id given');
  //     return candidate_benefit.destroy({ id });
  //   };


  return module;
};

/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { job_memo_group_chat } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    console.log(row);
    if (!row) throw new Error('No row data given');
    delete row.id;
    return job_memo_group_chat.save({ ...row, user_id: user.id });
  };

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return job_memo_group_chat.destroy({ id });
  };

  // module.get = async id => db.query(`select * from job_memo_collaborator jmc inner join users u ON u.id = jmc.user_id inner join job_memo jm on jm.id = jmc.job_memo_id where jm.id = ${id}`);

  module.get = async id => db.query(`select * from job_memo_group_chat where job_memo_id = ${id}`);

  //   module.getFromUserId = async id => db.query(`select * from users u inner join job_memo_collaborator jmc ON u.id = jmc.user_id inner join job_memo jm on jm.id = jmc.job_memo_id where u.id = ${id}`);

  return module;
};

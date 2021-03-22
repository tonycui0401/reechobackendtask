/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { project_list_collaborators } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return project_list_collaborators.save({ ...row, user_id: user.id });
  };

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return project_list_collaborators.destroy({ id });
  };

  // module.get = async id => db.query(`select * from job_memo_collaborator jmc inner join users u ON u.id = jmc.user_id inner join job_memo jm on jm.id = jmc.job_memo_id where jm.id = ${id}`);

  module.get = async id => db.query(`select * from users u inner join project_list_collaborators plc on u.id = plc.collaborator_id where plc.project_list_id = ${id}`);

  //   module.getFromUserId = async id => db.query(`select * from users u inner join job_memo_collaborator jmc ON u.id = jmc.user_id inner join job_memo jm on jm.id = jmc.job_memo_id where u.id = ${id}`);

  return module;
};

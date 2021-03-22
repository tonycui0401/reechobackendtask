/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { recruiter_roles_clients } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return recruiter_roles_clients.save({ ...row, user_id: user.id });
  };

  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return recruiter_roles_clients.save(row);
  };

  module.getOne = async user => db.query(`select * from users u inner join recruiter_roles_clients c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async id => db.query(`select * from recruiter_roles_clients c inner join users u ON c.user_id=u.id where user_id = ${id}`);


  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return recruiter_roles_clients.destroy({ id });
  };

  return module;
};

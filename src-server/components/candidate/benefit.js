/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { candidate_benefit } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return candidate_benefit.save({ ...row, user_id: user.id });
  };

  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return candidate_benefit.save(row);
  };


  module.getOne = async user => db.query(`select * from users u inner join candidate_benefit c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async id => db.query(`select * from candidate_benefit c inner join users u ON c.user_id=u.id where user_id = ${id}`);


  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return candidate_benefit.destroy({ id });
  };


  return module;
};

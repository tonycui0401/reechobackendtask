/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { candidateview_order } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return candidateview_order.save({ ...row, user_id: user.id });
  };

  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return candidateview_order.save(row);
  };

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return candidateview_order.destroy({ id });
  };

  module.getAll = async () => db.query('select * from candidateview_order c inner join users u on c.user_id = u.id where emailverified = true and user_id != 48');

  module.get = async id => db.query(`select * from candidateview_order c inner join users u ON c.user_id=u.id where user_id = ${id}`);

  module.getOne = async user => db.query(`select * from users u inner join candidateview_order c ON c.user_id=u.id where user_id = ${user.id}`);

  return module;
};

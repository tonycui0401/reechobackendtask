/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { profile_type } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return profile_type.save({ ...row, user_id: user.id });
  };


  module.getOne = async user => db.query(`select * from profile_type c inner join users u ON c.user_id=u.id where c.user_id = ${user.id}`);


  return module;
};

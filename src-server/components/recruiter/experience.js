/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { recruiter_experience } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return recruiter_experience.save({ ...row, user_id: user.id });
  };

  module.update = async (user, row) => {
    if (!Number(user.id)) throw new Error('No id given');
    // row.id = user.id;
    const key = Object.keys(row)[0];
    const value = Object.values(row)[0];
    console.log(Object.keys(row)[0]);
    console.log(Object.values(row)[0]);
    // return db.query(`select * from users u inner join recruiter_experience c ON c.user_id=u.id where user_id = ${user.id}`);
    // return recruiter_experience.save(row);

    return db.query(`update recruiter_experience set ${key} = '${value}' where user_id = ${user.id}`);
  };

  module.updateEx = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return recruiter_experience.save(row);
  };


  // module.updateImg = async (user, row) => {

  // }


  // update recruiter_experience set job_title = 'ceo' where user_id = 126


  module.getOne = async user => db.query(`select * from users u inner join recruiter_experience c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async id => db.query(`select * from recruiter_experience c inner join users u ON c.user_id=u.id where user_id = ${id}`);


  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return recruiter_experience.destroy({ id });
  };

  return module;
};

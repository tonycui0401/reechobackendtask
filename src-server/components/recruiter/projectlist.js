/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { project_list } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return project_list.save({ ...row, user_id: user.id });
  };

  //   module.update = async (user, row) => {
  //     if (!Number(user.id)) throw new Error('No id given');
  //     // row.id = user.id;
  //     const key = Object.keys(row)[0];
  //     const value = Object.values(row)[0];
  //     console.log(Object.keys(row)[0]);
  //     console.log(Object.values(row)[0]);
  //     // return db.query(`select * from users u inner join recruiter_experience c ON c.user_id=u.id where user_id = ${user.id}`);
  //     // return recruiter_experience.save(row);

  //     return db.query(`update recruiter_experience set ${key} = '${value}' where user_id = ${user.id}`);
  //   };

  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return project_list.save(row);
  };


  // module.updateImg = async (user, row) => {

  // }


  // update recruiter_experience set job_title = 'ceo' where user_id = 126


  //   module.getOne = async user => db.query(`select * from users u inner join recruiter_experience c ON c.user_id=u.id where user_id = ${user.id}`);

  //   module.get = async id => db.query(`select * from users u inner join job_memo jm ON jm.user_id=u.id where user_id = ${id}`);

  module.getAll = async () => db.query('select * from project_list');

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return project_list.destroy({ id });
  };

  module.getFromUserId = async user => db.query(`select * from project_list where user_id =${user.id}`);
  //   module.searchKeywords = async search => db.query("SELECT * from job_memo jm where jm.title ILIKE '%' || $1 || '%' or jm.status ILIKE '%' || $1 || '%' or jm.company ILIKE '%' || $1 || '%' or jm.short_description ILIKE '%' || $1 || '%' or jm.long_description ILIKE '%' || $1 || '%' or jm.job_tags ILIKE '%' || $1 || '%' or jm.benefit_tags ILIKE '%' || $1 || '%' or jm.referral_fee ILIKE '%' || $1 || '%'", [search.toLowerCase()]);


  return module;
};

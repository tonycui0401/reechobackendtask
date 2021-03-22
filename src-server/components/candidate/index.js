/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { candidate_profile } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return candidate_profile.save({ ...row, user_id: user.id });
  };

  // Get all
  // module.get = async () => candidate_profile.find();


  module.getOne = async user => db.query(`select * from users u inner join candidate_profile c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async id => db.query(`select * from candidate_profile c inner join users u ON c.user_id=u.id where user_id = ${id}`);

  // Get one
  // module.getOne = async id => candidate_profile.findOne({ id });
  //   module.getOneByEmail = async email => candidate_profile.findOne({ email });

  module.checkEmailVerify = async email => db.query(`select emailverified from users where email ='${email}'`);

  // Check
  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return candidate_profile.save(row);
  };


  // module.update = async (user, row) => {
  //   if (!Number(user.id)) throw new Error('No id given');
  //   row.id = user.id;
  //   return users.save(row);
  // };


  // `update users set user_img = '${req.query.user_img}' where id =${id}`
  //   module.updateImg = async (id, user_img) => {
  //     if (db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
  //       return 'image updated';
  //     }
  //   };


  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return candidate_profile.destroy({ id });
  };


  module.getProfile = async id => db.query(`SELECT * from candidate_profile cp inner join users u on cp.user_id = u.id inner join candidateview_order cvo on cvo.user_id = u.id WHERE u.id = ${id}`);

  module.getExperience = async id => db.query(`SELECT * from candidate_experience cep inner join users u on cep.user_id = u.id WHERE u.id = ${id}`);

  module.getEducation = async id => db.query(`SELECT *  from candidate_education ced inner join users u on ced.user_id = u.id where u.id = ${id}`);

  module.getBenefit = async id => db.query(`SELECT *  from candidate_benefit ced inner join users u on ced.user_id = u.id where u.id = ${id}`);


  module.searchKeywords = async search => db.query("SELECT * from candidate_profile cp inner join users u on cp.user_id = u.id inner join candidate_experience ce on ce.user_id = u.id inner join candidate_education ced on ced.user_id = u.id inner join candidateview_order co on u.id = co.user_id WHERE u.disabled = false and (cp.nextachievements ILIKE '%' || $1 || '%' or cp.hearabout ILIKE '%' || $1 || '%' or cp.surpriseof ILIKE '%' || $1 || '%' or cp.proudof ILIKE '%' || $1 || '%' or ce.company ILIKE '%' || $1 || '%' or ce.job_title ILIKE '%' || $1 || '%' or ce.experience ILIKE '%' || $1 || '%' or ced.degree ILIKE '%' || $1 || '%' or ced.institution ILIKE '%' || $1 || '%' or ced.education ILIKE '%' || $1 || '%' or u.city ILIKE '%' || $1 || '%' or u.firstname ILIKE '%' || $1 || '%' or u.lastname ILIKE '%' || $1 || '%' or u.firstname || ' ' || u.lastname ILIKE '%' || $1 || '%')", [search.toLowerCase()]);


  return module;
};

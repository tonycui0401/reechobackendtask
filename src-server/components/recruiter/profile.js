/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { recruiter_profile } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return recruiter_profile.save({ ...row, user_id: user.id });
  };

  // Get all
  // module.get = async () => candidate_profile.find();


  module.getOne = async user => db.query(`select * from users u inner join recruiter_profile c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async id => db.query(`select * from recruiter_profile c inner join users u ON c.user_id=u.id where user_id = ${id}`);

  // Get one
  // module.getOne = async id => candidate_profile.findOne({ id });
  //   module.getOneByEmail = async email => candidate_profile.findOne({ email });

  //   module.checkEmailVerify = async email => db.query(`select emailverified from users where email ='${email}'`);

  // Check
  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return recruiter_profile.save(row);
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
    return recruiter_profile.destroy({ id });
  };

  module.getProfileBySlug = async slug => db.query(`SELECT * from recruiter_profile rp inner join users u on rp.user_id = u.id inner join recruiter_experience re on re.user_id = u.id inner join recruiter_roles_clients rrc on rrc.user_id = u.id inner join recruiterview_order ro on u.id = ro.user_id WHERE u.user_slug = '${slug}'`);

  module.getProfile = async id => db.query(`SELECT * from recruiter_profile rp inner join users u on rp.user_id = u.id inner join recruiter_experience re on re.user_id = u.id inner join recruiter_roles_clients rrc on rrc.user_id = u.id inner join recruiterview_order ro on u.id = ro.user_id WHERE u.id = ${id}`);

  module.getAllProfileLimit = async (offset, limit) => db.query(`SELECT * from recruiter_profile rp inner join users u on rp.user_id = u.id inner join recruiter_experience re on re.user_id = u.id inner join recruiter_roles_clients rrc on rrc.user_id = u.id inner join recruiterview_order ro on u.id = ro.user_id order by u.id desc offset ${offset} limit ${limit}`);

  module.searchKeywords = async search => db.query("SELECT * from recruiter_profile rp inner join users u on rp.user_id = u.id inner join recruiter_experience re on re.user_id = u.id inner join recruiter_roles_clients rrc on rrc.user_id = u.id inner join recruiterview_order ro on u.id = ro.user_id WHERE u.disabled = false and (rp.approachcandidates ILIKE '%' || $1 || '%' or rp.aboutyou ILIKE '%' || $1 || '%' or rp.approachemployer ILIKE '%' || $1 || '%' or rp.proudof ILIKE '%' || $1 || '%' or rp.werenotrecruiter ILIKE '%' || $1 || '%' or re.job_title ILIKE '%' || $1 || '%' or re.company ILIKE '%' || $1 || '%' or re.working_type ILIKE '%' || $1 || '%' or rrc.experience ILIKE '%' || $1 || '%' or rrc.roles ILIKE '%' || $1 || '%' or rrc.contract_type ILIKE '%' || $1 || '%' or rrc.clients ILIKE '%' || $1 || '%' or u.city ILIKE '%' || $1 || '%' or u.firstname ILIKE '%' || $1 || '%' or u.lastname ILIKE '%' || $1 || '%' or u.firstname || ' ' || u.lastname ILIKE '%' || $1 || '%')", [search.toLowerCase()]);

  module.searchKeywordsLimit = async (search, offset, limit) => db.query(`SELECT * from recruiter_profile rp inner join users u on rp.user_id = u.id inner join recruiter_experience re on re.user_id = u.id inner join recruiter_roles_clients rrc on rrc.user_id = u.id inner join recruiterview_order ro on u.id = ro.user_id WHERE u.disabled = false and (rp.approachcandidates ILIKE '%' || $1 || '%' or rp.aboutyou ILIKE '%' || $1 || '%' or rp.approachemployer ILIKE '%' || $1 || '%' or rp.proudof ILIKE '%' || $1 || '%' or rp.werenotrecruiter ILIKE '%' || $1 || '%' or re.job_title ILIKE '%' || $1 || '%' or re.company ILIKE '%' || $1 || '%' or re.working_type ILIKE '%' || $1 || '%' or rrc.experience ILIKE '%' || $1 || '%' or rrc.roles ILIKE '%' || $1 || '%' or rrc.contract_type ILIKE '%' || $1 || '%' or rrc.clients ILIKE '%' || $1 || '%' or u.city ILIKE '%' || $1 || '%' or u.firstname ILIKE '%' || $1 || '%' or u.lastname ILIKE '%' || $1 || '%' or u.firstname || ' ' || u.lastname ILIKE '%' || $1 || '%') offset ${offset} limit ${limit}`, [search.toLowerCase()]);


  return module;
};

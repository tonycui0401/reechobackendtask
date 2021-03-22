/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { job_memo } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return job_memo.save({ ...row, user_id: user.id });
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
    return job_memo.save(row);
  };


  // module.updateImg = async (user, row) => {

  // }


  // update recruiter_experience set job_title = 'ceo' where user_id = 126


  //   module.getOne = async user => db.query(`select * from users u inner join recruiter_experience c ON c.user_id=u.id where user_id = ${user.id}`);

  module.get = async id => db.query(`select * from users u inner join job_memo jm ON jm.user_id=u.id where user_id = ${id}`);

  module.getAll = async () => db.query('select * from users u inner join job_memo jm ON jm.user_id=u.id');

  module.getAllTrue = async () => db.query('select * from users u inner join job_memo jm ON jm.user_id=u.id where jm.approval = true');

  module.getAllFalse = async () => db.query('select * from users u inner join job_memo jm ON jm.user_id=u.id where jm.approval = false');

  module.getLimit = async (offset, limit) => db.query(`select * from job_memo jm inner join users u on u.id = jm.user_id order by jm.id desc offset ${offset} limit ${limit}`);

  module.getFrom = async id => db.query(`select * from job_memo where id = ${id}`);

  module.getFromSlug = async slug => db.query(`select * from job_memo where jobslug = '${slug}'`);

  // module.getLimit = async (sender, receipt, offset, limit) => db.query(`select * from private_chat where sender = ${sender} and receipt = ${receipt} union all select * from private_chat where sender = ${receipt} and receipt = ${sender} order by time desc offset ${offset} limit ${limit}`);

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return job_memo.destroy({ id });
  };

  // module.searchKeywordsLimit = async (search, offset, limit) => db.query(`SELECT * from recruiter_profile rp inner join users u on rp.user_id = u.id inner join recruiter_experience re on re.user_id = u.id inner join recruiter_roles_clients rrc on rrc.user_id = u.id inner join recruiterview_order ro on u.id = ro.user_id WHERE u.disabled = false and (rp.approachcandidates ILIKE '%' || $1 || '%' or rp.aboutyou ILIKE '%' || $1 || '%' or rp.approachemployer ILIKE '%' || $1 || '%' or rp.proudof ILIKE '%' || $1 || '%' or rp.werenotrecruiter ILIKE '%' || $1 || '%' or re.job_title ILIKE '%' || $1 || '%' or re.company ILIKE '%' || $1 || '%' or re.working_type ILIKE '%' || $1 || '%' or rrc.experience ILIKE '%' || $1 || '%' or rrc.roles ILIKE '%' || $1 || '%' or rrc.contract_type ILIKE '%' || $1 || '%' or rrc.clients ILIKE '%' || $1 || '%' or u.city ILIKE '%' || $1 || '%' or u.firstname ILIKE '%' || $1 || '%' or u.lastname ILIKE '%' || $1 || '%' or u.firstname || ' ' || u.lastname ILIKE '%' || $1 || '%') offset ${offset} limit ${limit}`, [search.toLowerCase()]);

  module.searchKeywords = async search => db.query("SELECT * from job_memo jm where jm.title ILIKE '%' || $1 || '%' or jm.status ILIKE '%' || $1 || '%' or jm.company ILIKE '%' || $1 || '%' or jm.short_description ILIKE '%' || $1 || '%' or jm.long_description ILIKE '%' || $1 || '%' or jm.job_tags ILIKE '%' || $1 || '%' or jm.benefit_tags ILIKE '%' || $1 || '%' or jm.referral_fee ILIKE '%' || $1 || '%'", [search.toLowerCase()]);

  module.searchKeywordsLimit = async (search, offset, limit) => db.query(`SELECT * from job_memo jm where jm.title ILIKE '%' || $1 || '%' or jm.status ILIKE '%' || $1 || '%' or jm.company ILIKE '%' || $1 || '%' or jm.short_description ILIKE '%' || $1 || '%' or jm.long_description ILIKE '%' || $1 || '%' or jm.job_tags ILIKE '%' || $1 || '%' or jm.benefit_tags ILIKE '%' || $1 || '%' or jm.referral_fee ILIKE '%' || $1 || '%' offset ${offset} limit ${limit}`, [search.toLowerCase()]);

  // module.approveJobMemo = async (id, admin_id) => db.query(`update job_memo set approval = true, approval_id = ${admin_id}, approval_date = ${Date.now()} where id = ${id}`);

  module.approveJobMemo = async (id, admin_id) => db.query(`update job_memo set approval = true, approval_id = ${admin_id} where id = ${id}`);


  return module;
};

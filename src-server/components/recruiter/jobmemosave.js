/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { job_memo_save } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return job_memo_save.save({ ...row, user_id: user.id });
  };

  //   module.update = async (id, row) => {
  //     if (!Number(id)) throw new Error('No id given');
  //     row.id = id;
  //     return privacy.save(row);
  //   };

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return job_memo_save.destroy({ id });
  };

  //   module.getFromJobId = async id => db.query(`select * from job_memo jm inner join job_memo_save jmc on jm.id = jmc.job_memo_id inner join users u ON jmc.user_id=u.id where jm.id = ${id}`);

  module.getFromUserId = async id => db.query(`select * from users u inner join job_memo_save jms ON u.id = jms.user_id inner join job_memo jm on jms.job_memo_id = jm.id where u.id = ${id}`);

  //   module.getPrivacy = async user => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.user_id = ${user.id}`);

  //   module.getPrivacyFromReceipt = async user => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.receipt_id = ${user.id}`);


  //   module.getPrivacyById = async (user, privacy_type, id) => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.privacy_type = '${privacy_type}' and p.user_id = ${user.id} and p.receipt_id = ${id}`);

  //   module.getAllPrivacyById = async (user, id) => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.user_id = ${user.id} and p.receipt_id = ${id}`);

  return module;
};

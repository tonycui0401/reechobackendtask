/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { privacy } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return privacy.save({ ...row, user_id: user.id });
  };

  //   module.update = async (id, row) => {
  //     if (!Number(id)) throw new Error('No id given');
  //     row.id = id;
  //     return privacy.save(row);
  //   };

  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return privacy.destroy({ id });
  };

  module.get = async (user, privacy_type) => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.privacy_type = '${privacy_type}' and p.user_id = ${user.id}`);

  module.getPrivacy = async user => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.user_id = ${user.id}`);

  module.getPrivacyFromReceipt = async user => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.receipt_id = ${user.id}`);


  module.getPrivacyById = async (user, privacy_type, id) => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.privacy_type = '${privacy_type}' and p.user_id = ${user.id} and p.receipt_id = ${id}`);

  module.getAllPrivacyById = async (user, id) => db.query(`select * from users u inner join privacy p ON p.receipt_id=u.id where p.user_id = ${user.id} and p.receipt_id = ${id}`);

  return module;
};

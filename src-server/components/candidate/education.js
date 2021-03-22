/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { candidate_education } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return candidate_education.save({ ...row, user_id: user.id });
  };

  // Get all
  module.get = async () => candidate_education.find();

  // Get one
  module.getOne = async user => db.query(`select * from users u inner join candidate_education c ON c.user_id=u.id where user_id = ${user.id}`);
  //   module.getOneByEmail = async email => candidate_profile.findOne({ email });

  module.get = async id => db.query(`select * from candidate_education c inner join users u ON c.user_id=u.id where user_id = ${id}`);


  module.checkEmailVerify = async email => db.query(`select emailverified from users where email ='${email}'`);

  // Check
  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return candidate_education.save(row);
  };
  // `update users set user_img = '${req.query.user_img}' where id =${id}`
  //   module.updateImg = async (id, user_img) => {
  //     if (db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
  //       return 'image updated';
  //     }
  //   };


  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return candidate_education.destroy({ id });
  };

  return module;
};

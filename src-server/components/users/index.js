/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { users } = db;
  const { ios_device_token } = db;

  const module = {};

  // Create
  module.create = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return users.save(row);
  };

  // Get all
  module.get = async () => users.find();

  // Get one
  module.getOne = async id => users.findOne({ id });
  module.getOneByEmail = async email => users.findOne({ email });

  module.checkEmailVerify = async email => db.query(`select emailverified from users where email ='${email}'`);

  // Check
  // Update
  module.update = async (user, row) => {
    if (!Number(user.id)) throw new Error('No id given');
    row.id = user.id;
    return users.save(row);
  };


  module.updateUserChatStatus = async (id, chatstatus) => db.query(`update users set chatstatus = '${chatstatus}' where id=${id}`);


  // `update users set user_img = '${req.query.user_img}' where id =${id}`
  module.updateImg = async (id, user_img) => {
    if (db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
      return 'image updated';
    }
  };


  module.updateUserStatusById = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return users.save(row);
  };


  module.createIosToken = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return ios_device_token.save({ ...row, user_id: user.id });
  };

  module.getIosToken = async id => db.query(`select * from users u inner join ios_device_token idk ON idk.user_id=u.id where idk.user_id = ${id} order by idk.id desc`);

  module.deleteIosToken = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return ios_device_token.destroy({ id });
  };


  // module.createContactBook = module.updateEmailStatus = async email => db.query(`update users set emailverified = true where email='${email}'`);

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return users.destroy({ id });
  };

  return module;
};

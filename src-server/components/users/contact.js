/* eslint-disable consistent-return */
/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { contact_book } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return contact_book.save({ ...row, user_id: user.id });
  };

  //   // Get all
  //   module.get = async () => users.find();

  //   // Get one
  //   module.getOne = async id => users.findOne({ id });
  //   module.getOneByEmail = async email => users.findOne({ email });

  //   module.checkEmailVerify = async email => db.query(`select emailverified from users where email ='${email}'`);

  //   // Check
  //   // Update
  //   module.update = async (user, row) => {
  //     if (!Number(user.id)) throw new Error('No id given');
  //     row.id = user.id;
  //     return users.save(row);
  //   };


  //   module.updateUserChatStatus = async (id, chatstatus) => db.query(`update users set chatstatus = '${chatstatus}' where id=${id}`);


  //   // `update users set user_img = '${req.query.user_img}' where id =${id}`
  //   module.updateImg = async (id, user_img) => {
  //     if (db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
  //       return 'image updated';
  //     }
  //   };
  module.get = async user => db.query(`select * from users u inner join contact_book cp ON cp.contact_id=u.id where cp.user_id = ${user.id}`);


  module.getById = async id => db.query(`select contact_id from contact_book where user_id = ${id}`);

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return contact_book.destroy({ id });
  };

  return module;
};

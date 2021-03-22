/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
const fs = require('fs');
// const parse = require('csv-parse');

module.exports = (app) => {
  const db = app.get('db');
  const {
    hearabout_tag, job_tag, employer_tag, skill_tag, important_tag, location_tag, recruiter_role_tag, degree_tag, education_tag, institution_tag
  } = db;
  const module = {};

  // Create
  module.createHearabout = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return hearabout_tag.save({ ...row });
  };


  module.createJobTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return job_tag.save({ ...row });
  };

  module.createEmployerTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return employer_tag.save({ ...row });
  };

  module.createSkillTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return skill_tag.save({ ...row });
  };
  module.createImportantTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return important_tag.save({ ...row });
  };

  module.createLocationTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return location_tag.save({ ...row });
  };

  module.createEducationTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return education_tag.save({ ...row });
  };

  module.createDegreeTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return degree_tag.save({ ...row });
  };

  module.createInstitutionTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return institution_tag.save({ ...row });
  };

  module.createRoleTag = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return recruiter_role_tag.save({ ...row });
  };


  // Get all
  module.getSkillTag = async () => db.query('select * from skill_tag');
  module.getlocationTag = async () => db.query('select * from location_tag');
  module.getJobTag = async () => db.query('select * from job_tag');
  module.getexpertiseTag = async () => db.query('select * from expertise_tag');
  module.sector_tag = async () => db.query('select * from sector_tag');
  module.getEmployerTag = async () => db.query('select * from employer_tag');
  module.business_tag = async () => db.query('select * from business_tag');
  module.hearabout_tag = async () => db.query('select * from hearabout_tag');
  module.important_tag = async () => db.query('select * from important_tag');

  module.getInstitutionTag = async () => db.query('select * from institution_tag');
  module.getDegreeTag = async () => db.query('select * from degree_tag');
  module.getRoleTag = async () => db.query('select * from recruiter_role_tag');
  module.getEducationTag = async () => db.query('select * from education_tag');


  module.getOneInstitutionTag = async institution => db.query(`select * from institution_tag where title ='${institution}'`);

  module.getOneDegreeTag = async degree => db.query(`select * from degree_tag where title ='${degree}'`);

  module.getOneRoleTag = async role => db.query(`select * from recruiter_role_tag where title ='${role}'`);

  module.getOneEducationTag = async education => db.query(`select * from education_tag where title ='${education}'`);

  // module.getOneHearabout = async hearabout => db.query("select * from hearabout_tag where title = '$hearabout'", hearabout, { single: true });
  // eslint-disable-next-line prefer-template
  module.getOneHearabout = async hearabout => db.query("select * from hearabout_tag where title ='" + hearabout + "'");

  module.getOneJobTag = async job => db.query(`select * from job_tag where title ='${job}'`);

  module.getOneEmployerTag = async employer => db.query(`select * from employer_tag where title ='${employer}'`);

  module.getOneSkillTag = async skill => db.query(`select * from skill_tag where title ='${skill}'`);

  module.getOneImportantTag = async important => db.query(`select * from important_tag where title ='${important}'`);
  // module.getOneHearabout = async hearabout => hearabout;

  module.getOneLocation = async (location, country) => db.query(`select * from location_tag where title ='${location}' and country = '${country}'`);

  // Get one
  module.getOne = async id => db.query(
    'select p.*, u.email as author from posts p left join users u ON p.user_id=u.id where p.id=$1',
    [id],
    { single: true }
  );


  const createRecordJob = (table, job) => db[table].insert({
    title: job,
  });


  module.loadJobTag = async () => {
    fs.readFile('job_title.csv', 'utf8', (err, data) => {
      const dataArray = data.split(/\r?\n/); // Be careful if you are in a \r\n world...
      // Your array contains ['ID', 'D11', ... ]


      const records = [];

      for (let i = 1; i <= dataArray.length; i += 1) {
        // const user = users[_.random(users.length - 1)];
        records.push(createRecordJob('job_tag', dataArray[i]));
      }


      console.log(dataArray);
    });
  };


  // // Update
  // module.update = async (id, row) => {
  //   if (!Number(id)) throw new Error('No id given');
  //   row.id = id;
  //   return skill_tag.save(row);
  // };

  // // Delete
  // module.delete = async (id) => {
  //   if (!Number(id)) throw new Error('No id given');
  //   return posts.destroy({ id });
  // };
  module.deleteHearabout = async hearabout => db.query(`delete from hearabout_tag where title ='${hearabout}'`);


  return module;
};

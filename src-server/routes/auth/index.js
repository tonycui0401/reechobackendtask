/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable max-len */

/* eslint-disable consistent-return */
/* eslint-disable radix */
const Router = require('express-promise-router');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const apn = require('apn');
const slugify = require('slugify');
const auth = require('../../components/auth/helpers');
// const p8 = require('./AuthKey_2F5J765B7C.p8');

const options = {
  token: {
    key: `${__dirname}/AuthKey_2F5J765B7C.p8`,
    keyId: '2F5J765B7C',
    teamId: 'YCB3MU8QJY'
  },
  production: true
};

const apnProvider = new apn.Provider(options);

module.exports = (app) => {
  const router = Router();
  const users = require('../../components/users')(app);
  const candidateProfile = require('../../components/candidate')(app);
  const candidateEducation = require('../../components/candidate/education')(app);
  const candidateExperience = require('../../components/candidate/experience')(app);
  const candidateBenefit = require('../../components/candidate/benefit')(app);
  const candidatePrivacy = require('../../components/candidate/privacy')(app);
  const candidateView = require('../../components/candidate/view')(app);
  const recruiterProfile = require('../../components/recruiter/profile')(app);
  const recruiterExperience = require('../../components/recruiter/experience')(app);
  const recruiterView = require('../../components/recruiter/view')(app);
  const recruiterRoles = require('../../components/recruiter/roles')(app);
  const profileType = require('../../components/profiletype')(app);
  const private_chat_last = require('../../components/chat/private_last')(app);
  const group_chat_last = require('../../components/chat/group_last')(app);
  // eslint-disable-next-line camelcase
  const contact_book = require('../../components/users/contact')(app);

  // eslint-disable-next-line camelcase
  const job_memo = require('../../components/recruiter/jobmemo')(app);

  // eslint-disable-next-line camelcase
  const job_memo_candidate = require('../../components/recruiter/jobmemocandidate')(app);

  const job_memo_contact = require('../../components/recruiter/jobmemocontact')(app);


  const job_memo_collaborator = require('../../components/recruiter/jobmemocollaborator')(app);

  const project_list_collaborators = require('../../components/recruiter/projectlistcollaborators')(app);

  const project_list_candidate = require('../../components/recruiter/projectlistcandidate')(app);

  const project_list_chat = require('../../components/recruiter/projectlistchat')(app);

  const project_list = require('../../components/recruiter/projectlist')(app);

  const job_memo_group_chat = require('../../components/recruiter/jobmemogroupchat')(app);

  const job_memo_save = require('../../components/recruiter/jobmemosave')(app);

  const job_memo_share = require('../../components/recruiter/jobmemoshare')(app);


  router.post('/send', async (req, res) => {
    const link = `http://reecho-frontend.s3-website-eu-west-1.amazonaws.com/register?email=${req.body.to}`;

    const smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: '"The ReEcho Team" <users@reecho.com>', // TODO: email sender
      to: req.body.to, // TODO: email receiver
      subject: 'Please confirm your Email account',
      // text: 'Wooohooo it works!!',
      html: `<head><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"><style> h1 { color: red;} img {width:130px;height:45px;} body {font-family: Poppins;} a {text-decoration: none;} #logo {position: relative;}#verify-btn {font-weight: 600;color: white;background-color: #1254e7;padding: 0.5em;padding-left: 1em;padding-right: 1em;border-radius: 5px;display: inline-block;margin-top: 1em;}</style></head><body style="font-family: Poppins;"><div id="email" style="align: center; margin: auto; font-family: Poppins, Helvetica;"><div id="content"><div id="logo" style="position: relative;"><img src="cid:unique@cheng.ee"/ style="width:130;height:45;"></div><div id="content" style="padding-left: 20px;"><div id="title" style="font-weight:600;font-size: 1.8em;">Hey, just one click</div>  <p id="text style="font-size: 1.3em;">Verify your email – and create a new kind of profile</p>  <a href="${link}" class="btn" id="verify-btn">Verify my email</a></div></div></div></body>`,
      // template: 'index',
      attachments: [
        {
          filename: 'http://reecho-frontend.s3-eu-west-1.amazonaws.com/logo/ReEcho_Logo.png',
          cid: 'unique@cheng.ee',
          path: 'http://reecho-frontend.s3-eu-west-1.amazonaws.com/logo/ReEcho_Logo.png'
        }
      ],

    };


    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        // res.end('error');
      } else {
        console.log(`Message sent: ${response.message}`);
        // res.end('sent');
      }
    });
  });
  // router.post('/sign_s3', sign_s3.sign_s3);


  router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err1, user) => {
      if (err1 || !user) {
        // console.log(err1);
        // console.log(user);
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }

      req.logIn(user, { session: false }, (err2) => {
        if (err2) {
          res.send(err2);
        } else {
          const token = auth.signUser(user);
          res.json({ user, token });
        }
      });
    })(req, res);
  });


  router.post('/registerCandidateEducation', auth.authenticate, async (req, res) => {
    console.log(candidateEducation);
    const params = _.pick(req.body, 'degree', 'institution', 'start_date', 'end_date', 'education', 'privacy');
    const ncandidateEducation = await candidateEducation.create(req.user, params);
    return res.json({ ncandidateEducation });
  });

  router.post('/registerCandidateExperience', auth.authenticate, async (req, res) => {
    console.log(candidateExperience);

    const params = _.pick(req.body, 'job_title', 'company', 'start_date', 'end_date', 'experience', 'privacy');
    const ncandidateExperience = await candidateExperience.create(req.user, params);
    return res.json({ ncandidateExperience });
  });

  router.post('/registerCandidateBenefit', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'currentpay', 'expectedpay', 'current_currency', 'expected_currency', 'noticeperiod', 'anyimportant', 'current_type', 'expected_type', 'privacy');
    const ncandidateBenefit = await candidateBenefit.create(req.user, params);
    return res.json({ ncandidateBenefit });
  });


  router.post('/registerProfileType', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'type');
    const nprofileType = await profileType.create(req.user, params);
    return res.json({ nprofileType });
  });


  router.post('/registerCandidateView', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'corder');
    const cview = await candidateView.create(req.user, params);
    return res.json({ cview });
  });


  router.post('/registerCandidateProfile', auth.authenticate, async (req, res) => {
    // const data = await posts.create(req.user, _.pick(req.body, 'title', 'author', 'content'));

    const params = _.pick(req.body, 'hearabout', 'nextachievements', 'surpriseof', 'proudof', 'seekingstatus', 'nextachieve_privacy', 'proudof_privacy', 'surpriseof_privacy');

    // params.password = auth.createHash(params.password);
    // params.email_ref = crypto.randomBytes(20).toString('hex');

    // console.log(candidateProfile);

    // const email_ref = crypto.randomBytes(20).toString('hex');

    // console.log('yes');
    console.log(params);
    // console.log('no');

    // const checkuser = await candidate_profile.getOneByEmail(params.email);

    // if (!checkuser) {
    const ncandidateProfile = await candidateProfile.create(req.user, params);
    return res.json({ ncandidateProfile });

    //   const token = auth.signUser(user);
    //   return res.json({ user, token });
    // }
    // res.status(401).json({ message: 'user exist' });
  });


  router.get('/allCandidateView', async (req, res) => {
    const data = await candidateView.getAll();
    res.json(data);
  });


  router.get('/candidateViewProfile', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateProfile.get(id);
    res.json(data);
  });

  router.get('/candidateViewView', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateView.get(id);
    res.json(data);
  });

  router.get('/candidateViewExperience', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateExperience.get(id);
    res.json(data);
  });

  router.get('/candidateViewEducation', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateEducation.get(id);
    res.json(data);
  });

  router.get('/candidateViewBenefit', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateBenefit.get(id);
    res.json(data);
  });


  router.get('/candidateProfile', auth.authenticate, async (req, res) => {
    const data = await candidateProfile.getOne(req.user);
    res.json(data);
  });


  router.get('/candidateKeywordsSearch', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const search = req.query.search;
    // const sender = parseInt(req.query.sender);
    const data = await candidateProfile.searchKeywords(search);
    res.json(data);
  });

  router.get('/recruiterKeywordsSearch', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const search = req.query.search;
    // const sender = parseInt(req.query.sender);
    const data = await recruiterProfile.searchKeywords(search);
    res.json(data);
  });

  router.get('/jobMemoKeywordsSearch', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const search = req.query.search;
    // const sender = parseInt(req.query.sender);
    const data = await job_memo.searchKeywords(search);
    res.json(data);
  });

  router.get('/jobMemoKeywordsSearchbyLimit', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const search = req.query.search;
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    // const sender = parseInt(req.query.sender);
    const data = await job_memo.searchKeywordsLimit(search, offset, limit);
    res.json(data);
  });

  router.get('/allJobMemos', async (req, res) => {
    const data = await job_memo.getAll();
    res.json(data);
  });

  router.get('/allJobMemosApproved', async (req, res) => {
    const data = await job_memo.getAllTrue();
    res.json(data);
  });

  router.get('/allJobMemosPending', async (req, res) => {
    const data = await job_memo.getAllFalse();
    res.json(data);
  });

  router.get('/allRecrutersLimit', async (req, res) => {
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    const data = await recruiterProfile.getAllProfileLimit(offset, limit);
    res.json(data);
  });

  router.get('/recruiterKeywordsSearchLimit', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const search = req.query.search;
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    // const sender = parseInt(req.query.sender);
    const data = await recruiterProfile.searchKeywordsLimit(search, offset, limit);
    res.json(data);
  });

  router.get('/allJobMemosLimit', async (req, res) => {
    const offset = parseInt(req.query.offset);
    const limit = parseInt(req.query.limit);
    const data = await job_memo.getLimit(offset, limit);
    res.json(data);
  });


  router.get('/jobMemoByUserId', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await job_memo.get(id);
    res.json(data);
  });

  router.get('/jobMemoFromId', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await job_memo.getFrom(id);
    res.json(data);
  });

  router.get('/jobMemoFromSlug', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = req.query.slug;
    // const sender = parseInt(req.query.sender);
    const data = await job_memo.getFromSlug(id);
    res.json(data);
  });

  router.get('/recruiterProfileById', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await recruiterProfile.getProfile(id);
    res.json(data);
  });

  router.get('/recruiterProfileBySlug', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const slug = req.query.slug;
    // const sender = parseInt(req.query.sender);
    const data = await recruiterProfile.getProfileBySlug(slug);
    res.json(data);
  });

  router.get('/candidateProfileById', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await candidateProfile.getProfile(id);
    res.json(data);
  });

  router.get('/candidateExperienceById', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await candidateProfile.getExperience(id);
    res.json(data);
  });

  router.get('/candidateEducationById', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await candidateProfile.getEducation(id);
    res.json(data);
  });

  router.get('/candidateBenefitById', async (req, res) => {
    // eslint-disable-next-line prefer-destructuring
    const id = parseInt(req.query.id);
    // const sender = parseInt(req.query.sender);
    const data = await candidateProfile.getBenefit(id);
    res.json(data);
  });


  router.get('/candidateView', auth.authenticate, async (req, res) => {
    const data = await candidateView.getOne(req.user);
    res.json(data);
  });

  router.get('/recruiterProfile', auth.authenticate, async (req, res) => {
    const data = await recruiterProfile.getOne(req.user);
    res.json(data);
  });

  router.get('/recruiterView', auth.authenticate, async (req, res) => {
    const data = await recruiterView.getOne(req.user);
    res.json(data);
  });

  router.get('/recruiterRoles', auth.authenticate, async (req, res) => {
    const data = await recruiterRoles.getOne(req.user);
    res.json(data);
  });


  router.get('/recruiterExperience', auth.authenticate, async (req, res) => {
    const data = await recruiterExperience.getOne(req.user);
    res.json(data);
  });


  router.post('/registerRecruiterExperience', auth.authenticate, async (req, res) => {
    console.log(candidateExperience);

    const params = _.pick(req.body, 'job_title', 'company', 'start_date', 'end_date', 'working_type');
    const nrecruiterExperience = await recruiterExperience.create(req.user, params);
    return res.json({ nrecruiterExperience });
  });

  router.post('/registerRecruiterRoles', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'experience', 'roles', 'contract_type', 'clients');
    const nrecruiterRoles = await recruiterRoles.create(req.user, params);
    return res.json({ nrecruiterRoles });
  });

  router.post('/registerProfileType', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'type');
    const nprofileType = await profileType.create(req.user, params);
    return res.json({ nprofileType });
  });


  router.post('/registerRecruiterView', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'rorder');
    const rview = await recruiterView.create(req.user, params);
    return res.json({ rview });
  });


  router.post('/registerRecruiterProfile', auth.authenticate, async (req, res) => {
    // const data = await posts.create(req.user, _.pick(req.body, 'title', 'author', 'content'));

    const params = _.pick(req.body, 'aboutyou', 'approachcandidates', 'approachemployer', 'proudof', 'werenotrecruiter');


    console.log(params);

    const ncandidateProfile = await recruiterProfile.create(req.user, params);
    return res.json({ ncandidateProfile });
  });


  router.get('/allJobsFromCandidate', auth.authenticate, async (req, res) => {
    const data = await job_memo_candidate.getFromUserId(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/allCandidatesFromJob', auth.authenticate, async (req, res) => {
    const data = await job_memo_candidate.getFromJobId(parseInt(req.query.id));
    res.json(data);
  });

  router.post('/registerJobMemo', auth.authenticate, async (req, res) => {
    function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }


    const params = _.pick(req.body, 'title', 'status', 'company', 'short_description', 'long_description', 'job_tags', 'benefit_tags', 'createdat', 'referral_fee', 'posttoreecho', 'location', 'job_memo_status', 'job_memo_visible', 'internal_message', 'project_list_id', 'collaborator_chat_id');
    params.jobidentifier = makeid(8);
    params.jobslug = `${slugify(params.company)}-${slugify(params.title)}-${params.jobidentifier}`;
    const rview = await job_memo.create(req.user, params);
    return res.json({ rview });
  });


  router.put('/updateJobMemo', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await job_memo.update(id, _.pick(req.body, 'title', 'status', 'company', 'short_description', 'long_description', 'job_tags', 'benefit_tags', 'updatedat', 'referral_fee', 'posttoreecho', 'jobmemoimg', 'approval_date', 'location', 'job_memo_status', 'job_memo_visible', 'internal_message', 'project_list_id', 'collaborator_chat_id'));

    // const data = await job_memo.update(id);
    res.json(data);
  });

  router.put('/approvalJobMemo', async (req, res) => {
    const id = parseInt(req.query.id);
    const admin_id = parseInt(req.query.admin_id);
    console.log(id);
    console.log(admin_id);
    const data = await job_memo.approveJobMemo(id, admin_id);
    res.json(data);
  });

  // const params = _.pick(req.body, 'email', 'phone', 'firstname', 'password', 'lastname', 'city', 'country', 'emailverified', 'userimg', 'chatstatus', 'lastonline');
  // if (params.password !== '' || !params.password) {
  //   params.password = auth.createHash(params.password);
  // }
  // const data = await users.update(req.user, params);
  // res.json(data);


  router.delete('/deleteJobMemo', auth.authenticate, async (req, res) => {
    const data = await job_memo.delete(parseInt(req.query.id));
    res.json(data);
  });

  // router.post('/registerPrivacy', auth.authenticate, async (req, res) => {
  //   const params = _.pick(req.body, 'privacy_type', 'receipt_id');
  //   const data = await candidatePrivacy.create(req.user, params);
  //   return res.json({ data });
  // });

  router.post('/registerProjectListCandidate', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'candidate_id', 'project_list_id');
    const data = await project_list_candidate.create(req.user, params);
    return res.json({ data });
  });

  router.post('/registerProjectListCollaborators', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'collaborator_id', 'project_list_id');
    const data = await project_list_collaborators.create(req.user, params);
    return res.json({ data });
  });

  router.get('/viewProjectListCollaborators', auth.authenticate, async (req, res) => {
    // const params = _.pick(req.body, 'collaborator_id', 'project_list_id');
    const data = await project_list_collaborators.get(parseInt(req.query.id));
    return res.json({ data });
  });

  router.get('/viewProjectListCandidates', auth.authenticate, async (req, res) => {
    // const params = _.pick(req.body, 'collaborator_id', 'project_list_id');
    const data = await project_list_collaborators.get(parseInt(req.query.id));
    return res.json({ data });
  });

  router.get('/viewProjectListChat', auth.authenticate, async (req, res) => {
    // const params = _.pick(req.body, 'collaborator_id', 'project_list_id');
    const data = await project_list_chat.get(parseInt(req.query.id));
    return res.json({ data });
  });

  router.get('/viewJobMemoGroupChat', auth.authenticate, async (req, res) => {
    // const params = _.pick(req.body, 'collaborator_id', 'project_list_id');
    const data = await job_memo_group_chat.get(parseInt(req.query.id));
    return res.json({ data });
  });

  router.delete('/deleteProjectListChat', auth.authenticate, async (req, res) => {
    const data = await project_list_chat.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteProjectListCandidate', auth.authenticate, async (req, res) => {
    const data = await project_list_candidate.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteProjectListCollaborator', auth.authenticate, async (req, res) => {
    const data = await project_list_collaborators.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteJobMemoGroupChat', auth.authenticate, async (req, res) => {
    const data = await job_memo_group_chat.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteJobMemoCandidate', auth.authenticate, async (req, res) => {
    const data = await job_memo_candidate.delete(parseInt(req.query.id));
    res.json(data);
  });

  // router.get('/registerProjectListCollaborators', auth.authenticate, async (req, res) => {
  //   const params = _.pick(req.body, 'collaborator_id', 'project_list_id');
  //   const data = await project_list_collaborators.create(req.user, params);
  //   return res.json({ data });
  // });


  router.post('/registerJobMemoGroupChat', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'group_chat_id', 'job_memo_id');
    const data = await job_memo_group_chat.create(req.user, params);
    return res.json({ data });
  });

  router.post('/registerProjectListChat', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'group_chat_id', 'project_list_id');
    const data = await project_list_chat.create(req.user, params);
    return res.json({ data });
  });

  router.post('/registerProjectList', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'name');
    // console.log(params);
    const data = await project_list.create(req.user, params);
    return res.json({ data });
  });

  router.put('/updateProjectList', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'name');
    const data = await project_list.update(req.user, params);
    return res.json({ data });
  });

  router.get('/allProjectList', auth.authenticate, async (req, res) => {
    const data = await project_list.getAll();
    return res.json({ data });
  });

  router.get('/allProjectListFromUserId', auth.authenticate, async (req, res) => {
    const data = await project_list.getFromUserId(req.user);
    return res.json({ data });
  });


  router.post('/registerJobMemoCandidate', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'candidate_id', 'job_memo_id');
    const data = await job_memo_candidate.create(req.user, params);
    return res.json({ data });
  });

  router.post('/registerJobMemoSave', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'job_memo_id');
    const data = await job_memo_save.create(req.user, params);
    return res.json({ data });
  });


  router.delete('/deleteJobMemoCandidate', auth.authenticate, async (req, res) => {
    const data = await job_memo_candidate.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteJobMemoSave', auth.authenticate, async (req, res) => {
    const data = await job_memo_save.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/allJobsFromSave', auth.authenticate, async (req, res) => {
    const data = await job_memo_save.getFromUserId(parseInt(req.query.id));
    res.json(data);
  });

  router.post('/registerJobMemoContact', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'contact_id', 'job_memo_id');
    const data = await job_memo_contact.create(req.user, params);
    return res.json({ data });
  });


  // router.post('/registerJobMemoContact', auth.authenticate, async (req, res) => {
  //   const user_id = parseInt(req.query.id);
  //   const params = _.pick(req.body, 'job_memo_id');
  //   const rview = await job_memo_contact.create(user_id, params);
  //   return res.json({ rview });
  // });


  router.delete('/deleteJobMemoContact', auth.authenticate, async (req, res) => {
    const data = await job_memo_contact.delete(parseInt(req.query.id));
    res.json(data);
  });


  router.get('/allContactsFromJob', async (req, res) => {
    const data = await job_memo_contact.get(parseInt(req.query.id));
    res.json(data);
  });


  router.get('/allJobmemosByContactId', async (req, res) => {
    // const data = await job_memo_contact.getFromUserId(parseInt(req.query.id), parseInt(req.query.jid));
    const data = await job_memo_contact.getFromUserId(parseInt(req.query.id));
    res.json(data);
  });


  router.post('/registerJobMemoCollaborator', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'collaborator_id', 'job_memo_id');
    const rview = await job_memo_collaborator.create(req.user, params);
    return res.json({ rview });
  });


  router.delete('/deleteJobMemoCollaborator', auth.authenticate, async (req, res) => {
    const data = await job_memo_collaborator.delete(parseInt(req.query.id));
    res.json(data);
  });


  router.get('/allCollaboratorsFromJob', async (req, res) => {
    const data = await job_memo_collaborator.get(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/allCollaboratorsFromJobByUserId', async (req, res) => {
    const data = await job_memo_collaborator.getFromUserId(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/candidateExperience', auth.authenticate, async (req, res) => {
    const data = await candidateExperience.getOne(req.user);
    res.json(data);
  });

  router.get('/candidateBenefit', auth.authenticate, async (req, res) => {
    const data = await candidateBenefit.getOne(req.user);
    res.json(data);
  });


  router.get('/candidateEducation', auth.authenticate, async (req, res) => {
    const data = await candidateEducation.getOne(req.user);
    res.json(data);
  });

  router.get('/updateEmailStatus', async (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const data = await users.updateEmailStatus(req.query.email);
    res.redirect(`http://reecho-frontend.s3-website-eu-west-1.amazonaws.com/register?email=${req.query.email}`);
    // const data = await candidateEducation.getOne(req.user);
  });


  router.post('/setIosToken', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'token');

    const data = await users.createIosToken(req.user, params);

    return res.json({ data });


    // const data = await candidateEducation.getOne(req.user);
    // res.json(data);
  });


  router.delete('/deleteIosToken', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);

    const data = await users.deleteIosToken(id);

    return res.json({ data });


    // const data = await candidateEducation.getOne(req.user);
    // res.json(data);
  });


  router.get('/sendIosNotification', async (req, res) => {
    // const params = _.pick(req.body, 'token');

    // eslint-disable-next-line camelcase
    // console.log('test');
    const user_id = parseInt(req.query.id);

    const data = await users.getIosToken(user_id);

    const private_data = await private_chat_last.getUnseen(user_id);
    const group_data = await group_chat_last.getUnseen(user_id);

    // console.log(private_data.length + group_data.length);
    // console.log(group_data.length);


    // return res.json(data);
    const note = new apn.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = private_data.length + group_data.length;
    note.sound = 'default';
    note.alert = '\uD83D\uDCE7 \u2709 You have a new message';
    note.payload = { messageFrom: `${data[0].firstname} ${data[0].lastname}` };
    note.topic = 'com.reecho.reechodev';

    apnProvider.send(note, data[0].token).then((result) => {
      // see documentation for an explanation of result
      console.log(result);
    });
  });


  // router.get('/updateEmailStatus', auth.authenticate, async (req, res) => {
  //   // eslint-disable-next-line no-unused-vars
  //   const data = await users.updateEmailStatus(req.query.email);
  //   res.redirect(`http://reecho-frontend.s3-website-eu-west-1.amazonaws.com/register?email=${req.query.email}`);
  //   // const data = await candidateEducation.getOne(req.user);
  // });


  router.get('/profileType', auth.authenticate, async (req, res) => {
    const data = await profileType.getOne(req.user);
    res.json(data);
  });


  router.post('/register', async (req, res) => {
    function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }


    const params = _.pick(req.body, 'email', 'firstname', 'lastname', 'password', 'phone', 'city', 'country');

    params.password = auth.createHash(params.password);
    params.email_ref = crypto.randomBytes(20).toString('hex');
    params.email_code = Math.floor((Math.random() * 1000000) + 54).toString();
    const uniqueId = makeid(8);

    params.user_slug = `${slugify(params.firstname)}-${slugify(params.lastname)}-${uniqueId}`;


    // params.email_ref = crypto.randomBytes(20).toString('hex');
    // const email_ref = crypto.randomBytes(20).toString('hex');

    console.log('yes');
    console.log(params);
    console.log('no');

    const checkuser = await users.getOneByEmail(params.email);

    if (!checkuser) {
      const user = await users.create(params);
      const token = auth.signUser(user);
      return res.json({ user, token });
    }
    res.status(401).json({ message: 'user exist' });
  });


  router.get('/email', async (req, res) => {
    const data = await users.checkEmailVerify(req.query.email);
    res.json(data);
  });

  router.put('/user_img', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);

    const data = await users.updateImg(id, req.query.user_img);
    res.json(data);
  });

  router.put('/updateUser', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'email', 'phone', 'firstname', 'password', 'lastname', 'city', 'country', 'emailverified', 'userimg', 'chatstatus', 'lastonline');
    if (params.password !== '' || !params.password) {
      params.password = auth.createHash(params.password);
    }
    const data = await users.update(req.user, params);
    res.json(data);
  });


  router.put('/updateUserDisabled', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await users.updateUserStatusById(id, _.pick(req.body, 'disabled'));
    res.json(data);
  });


  router.put('/updateCandidateView', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateView.update(id, _.pick(req.body, 'corder'));
    res.json(data);
  });

  router.put('/updateRecruiterView', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await recruiterView.update(id, _.pick(req.body, 'rorder'));
    res.json(data);
  });

  router.put('/updateRecruiterProfile', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await recruiterProfile.update(id, _.pick(req.body, 'aboutyou', 'approachcandidates', 'approachemployer', 'proudof', 'werenotrecruiter'));
    res.json(data);
  });

  router.put('/updateRecruiterRoles', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await recruiterRoles.update(id, _.pick(req.body, 'experience', 'roles', 'contract_type', 'clients'));
    res.json(data);
  });

  router.put('/updateRecruiterExperience', auth.authenticate, async (req, res) => {
    // const data = await users.update(req.user, _.pick(req.body, 'email', 'phone', 'firstname', 'password', 'lastname', 'city', 'country', 'emailverified', 'userimg', 'chatstatus', 'lastonline'));
    const data = await recruiterExperience.update(req.user, _.pick(req.body, 'job_title', 'company', 'company_pic', 'start_date', 'end_date', 'working_type'));
    res.json(data);
  });

  router.put('/updateTheRecruiterExperience', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await recruiterExperience.updateEx(id, _.pick(req.body, 'job_title', 'company', 'company_pic', 'start_date', 'end_date', 'working_type'));
    res.json(data);
  });

  router.put('/updateCandidateProfile', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateProfile.update(id, _.pick(req.body, 'hearabout', 'nextachievements', 'surpriseof', 'proudof', 'seekingstatus', 'nextachieve_privacy', 'proudof_privacy', 'surpriseof_privacy', 'contact_privacy'));
    res.json(data);
  });


  router.put('/updateCandidateEducation', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateEducation.update(id, _.pick(req.body, 'degree', 'institution', 'start_date', 'end_date', 'education', 'privacy'));
    res.json(data);
  });


  router.put('/updateCandidateExperience', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateExperience.update(id, _.pick(req.body, 'job_title', 'company', 'start_date', 'end_date', 'experience', 'privacy'));
    res.json(data);
  });


  router.put('/updateCandidateBenefit', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await candidateBenefit.update(id, _.pick(req.body, 'currentpay', 'current_currency', 'expectedpay', 'expected_currency', 'noticeperiod', 'anyimportant', 'current_type', 'expected_type', 'privacy'));
    res.json(data);
  });


  router.post('/registerPrivacy', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'privacy_type', 'receipt_id');
    const data = await job_memo_share.create(req.user, params);
    return res.json({ data });
  });

  router.post('/registerJobmemoShare', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'channel_type', 'channel_id', 'job_memo_id', 'receipt_id');
    const data = await job_memo_share.create(req.user, params);
    return res.json({ data });
  });

  router.delete('/deleteJobmemoShare', auth.authenticate, async (req, res) => {
    const data = await job_memo_share.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/allJobsFromShare', auth.authenticate, async (req, res) => {
    const data = await job_memo_share.get(parseInt(req.query.id));
    res.json(data);
  });


  router.get('/viewJobmemoShare', auth.authenticate, async (req, res) => {
    // const id = parseInt(req.query.id);
    // const privacy_type = req.query.privacy;
    const data = await candidatePrivacy.get(req.user, req.query.privacy_type);
    res.json(data);
  });


  router.post('/registerContactBook', auth.authenticate, async (req, res) => {
    const params = _.pick(req.body, 'contact_id');
    const data = await contact_book.create(req.user, params);
    return res.json({ data });
  });

  router.get('/viewContactBook', auth.authenticate, async (req, res) => {
    const data = await contact_book.get(req.user);
    res.json(data);
  });

  router.get('/viewContactBookById', async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await contact_book.getById(id);
    res.json(data);
  });

  // Delete
  router.delete('/deleteContactBook', auth.authenticate, async (req, res) => {
    const data = await contact_book.delete(parseInt(req.query.id));
    res.json(data);
  });

  // Delete
  router.delete('/deleteCandidateExperience', auth.authenticate, async (req, res) => {
    const data = await candidateExperience.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteCandidateEducation', auth.authenticate, async (req, res) => {
    const data = await candidateEducation.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deleteRecruiterExperience', auth.authenticate, async (req, res) => {
    const data = await recruiterExperience.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.delete('/deletePrivacy', auth.authenticate, async (req, res) => {
    const data = await candidatePrivacy.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/viewPrivacy', auth.authenticate, async (req, res) => {
    // const id = parseInt(req.query.id);
    // const privacy_type = req.query.privacy;
    const data = await candidatePrivacy.get(req.user, req.query.privacy_type);
    res.json(data);
  });

  router.get('/viewPrivacyFromCurrentUser', auth.authenticate, async (req, res) => {
    // const id = parseInt(req.query.id);
    // const privacy_type = req.query.privacy;
    const data = await candidatePrivacy.getPrivacy(req.user);
    res.json(data);
  });


  router.get('/viewPrivacyById', auth.authenticate, async (req, res) => {
    // const id = parseInt(req.query.id);
    // const privacy_type = req.query.privacy;
    const data = await candidatePrivacy.getPrivacyById(req.user, req.query.privacy_type, parseInt(req.query.id));
    res.json(data);
  });

  router.get('/viewAllPrivacyById', auth.authenticate, async (req, res) => {
    const data = await candidatePrivacy.getAllPrivacyById(req.user, parseInt(req.query.id));
    res.json(data);
  });


  router.get('/viewAllPrivacyByCurrentReceipt', auth.authenticate, async (req, res) => {
    const data = await candidatePrivacy.getPrivacyFromReceipt(req.user);
    res.json(data);
  });


  // users


  router.get('/sendEmailToVerify', auth.authenticate, async (req, res) => {
    // const id = parseInt(req.query.id);
    // const privacy_type = req.query.privacy;
    // const data = await u.get(req.user, req.query.privacy_type);
    res.redirect(`http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/send?to=${req.user.email}&email_code=${req.user.email_code}`);
    // res.json(req.user.email_code);
  });


  router.get('/me', auth.authenticate, (req, res) => res.json(req.user));

  return router;
};

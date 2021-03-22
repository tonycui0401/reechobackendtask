/* eslint-disable no-dupe-keys */
// eslint-disable-next-line import/prefer-default-export
const getUser = require('../swagger/get-user');
const getprofile = require('../swagger/get-profile');
const getrecruiterprofile = require('../swagger/get-recruiter-profile');
const getAllTags = require('../swagger/get-all-tags');
const createTags = require('../swagger/create-tags');
const createLocationTags = require('../swagger/create-location-tag');
const login = require('../swagger/login');
const register = require('../swagger/register');
const registerCanPro = require('../swagger/registerCanPro');
const sendEmail = require('../swagger/send-email');
const updateUser = require('../swagger/update-user');
const updateUserDisabled = require('../swagger/update-user-disabled');
const registerCanEdu = require('../swagger/registerCanEdu');
const registerCanExp = require('../swagger/registerCanExp');
const registerRecExp = require('../swagger/registerRecExp');
const registerRecPro = require('../swagger/registerRecruiterProfile');
const registerRecRoles = require('../swagger/registerRecRoles');
const registerRecView = require('../swagger/registerRecruiterView');
const registerCanBen = require('../swagger/registerCanBen');
const registerCanVie = require('../swagger/registerCanVie');
const checkMail = require('../swagger/check-verify-mail');
const sendEmailToVerify = require('../swagger/send-email-to-verify');
const createProfileType = require('../swagger/create-profile-type');
const updateCandidateView = require('../swagger/update-candidate-view');
const updateRecruiterView = require('../swagger/update-recruiter-view');
const updateCandidateProfile = require('../swagger/update-candidate-profile');
const updateCandidateBenefit = require('../swagger/update-candidate-benefit');
const updateCandidateEducation = require('../swagger/update-candidate-education');
const updateCandidateExperience = require('../swagger/update-candidate-experience');
const updateRecruiterRoles = require('../swagger/update-recruiter-roles');
const updateRecruiterProfile = require('../swagger/update-recruiter-profile');
const updateRecruiterExperience = require('../swagger/update-recruiter-experience');
const updateChatGroup = require('../swagger/update-chat-group');
const candidateKeywordsSearch = require('../swagger/candidate-keywords-search');
const candidateProfileById = require('../swagger/candidate-profile-by-id');
const recruiterProfileById = require('../swagger/recruiter-profile-by-id');
const recruiterProfileBySlug = require('../swagger/recruiter-profile-by-slug');
const recruiterKeywordsSearch = require('../swagger/recruiter-keywords-search');
const getPrivateChatLastMessage = require('../swagger/get-private-last-message');
const getGroupChatLastMessage = require('../swagger/get-group-chat-last-message');
const getPrivateLastChannel = require('../swagger/get-private-last-channel');
const getGroupLastChannel = require('../swagger/get-group-last-channel');
const getPrivateChat = require('../swagger/get-private-chat');
const getPrivateChatByLimit = require('../swagger/get-private-chat-by-limit');
const getPrivateChatUnseen = require('../swagger/get-private-chat-unseen');
const getPrivateChatLastSeen = require('../swagger/get-private-chat-last-seen');
const updatePrivateChatSatus = require('../swagger/update-private-chat-status');
const addPrivateChatStarredSatus = require('../swagger/add-private-chat-starred');
const removePrivateChatStarredSatus = require('../swagger/remove-private-chat-starred');
const addGroupChatStarredSatus = require('../swagger/add-group-chat-starred');
const removeGroupChatStarredSatus = require('../swagger/remove-group-chat-starred');
const createGroupChatGroup = require('../swagger/create-group-chat-group');
const createPrivateLastChannel = require('../swagger/create-private-last-channel');
const createGroupLastChannel = require('../swagger/create-group-last-channel');
const createGroupChatMember = require('../swagger/create-group-chat-member');
const getAllGroupChatgroups = require('../swagger/get-all-group-chat-groups');
const getAllGroupChatMembers = require('../swagger/get-all-group-chat-members');
const getAllGroupChatMessages = require('../swagger/get-all-group-chat-messages');
const getGroupChatByLimit = require('../swagger/get-group-chat-by-limit');
const getGroupChatUnseen = require('../swagger/get-group-chat-unseen');
const getAllGroupChatUnseen = require('../swagger/get-all-group-chat-unseen');
const getGroupChatLastSeen = require('../swagger/get-group-chat-last-seen');
const updateGroupChatSatus = require('../swagger/update-group-chat-status');
const privateChatSearch = require('../swagger/private-chat-search');
const privateChatSearchImages = require('../swagger/private-chat-search-images');
const privateChatSearchFiles = require('../swagger/private-chat-search-files');
const groupChatSearch = require('../swagger/group-chat-search');
const groupChatSearchImages = require('../swagger/group-chat-search-images');
const groupChatSearchFiles = require('../swagger/group-chat-search-files');
const allVerifiedUsers = require('../swagger/all-verified-users');
const updateUserChatSatus = require('../swagger/update-user-chat-status');
const viewPrivacy = require('../swagger/get-privacy');
const viewPrivacy1 = require('../swagger/get-privacy1');
const viewPrivacy2 = require('../swagger/get-privacy2');
const viewPrivacy3 = require('../swagger/get-privacy3');
const viewPrivacy4 = require('../swagger/get-privacy4');
const deletePrivacy = require('../swagger/delete-privacy');
const registerPrivacy = require('../swagger/registerPrivacy');
const deleteIosToken = require('../swagger/delete-ios-token');
const registerIosToken = require('../swagger/register-ios-token');
const sendIosNotification = require('../swagger/send-ios-notification');
const viewContactBook = require('../swagger/get-contact-book');
const viewContactBookById = require('../swagger/get-contact-book-by-id');
const deleteContactBook = require('../swagger/delete-contact-book');
const registerContactBook = require('../swagger/RegisterContactBook');
const viewChatList = require('../swagger/get-chat-list');
const deleteChatList = require('../swagger/delete-chat-list');
const registerChatList = require('../swagger/RegisterChatList');
const updateChatList = require('../swagger/update-chat-list');
const viewChatListReceipt = require('../swagger/get-chat-list-receipt');
const registerChatListReceipt = require('../swagger/RegisterChatListReceipt');
const deleteChatListReceipt = require('../swagger/delete-chat-list-receipt');
const deleteCandidateExperience = require('../swagger/delete-candidate-experience');
const deleteCandidateEducation = require('../swagger/delete-candidate-education');
const deleteRecruiterExperience = require('../swagger/delete-recruiter-experience');
const createJobMemo = require('../swagger/registerJobMemo');
const createJobMemoCandidate = require('../swagger/registerJobMemoCandidate');
const updateJobMemo = require('../swagger/update-job-memo');
const deleteJobMemo = require('../swagger/delete-job-memo');
const deleteJobMemoCandidates = require('../swagger/delete-job-memo-candidate');
const viewJobMemoFromCandidate = require('../swagger/get-alljobs-from-candidate');
const viewCandidateFromJobMemo = require('../swagger/get-allcandidates-from-job');
const jobmemoKeywordsSearch = require('../swagger/jobmemo-keywords-search');
const createJobMemoSave = require('../swagger/regiasterJobMemoSave');
const createJobMemoShare = require('../swagger/registerJobMemoShare');
const deleteJobMemoSave = require('../swagger/delete-job-memo-save');
const deleteJobMemoShare = require('../swagger/delete-job-memo-share');
const viewJobMemoFromSave = require('../swagger/get-alljobs-from-save');
const viewJobMemoFromShare = require('../swagger/get-alljobs-from-share');
const createJobMemoContact = require('../swagger/registerJobMemoContact');
const deleteJobMemoContact = require('../swagger/delete-job-memo-contact');
const viewJobMemoContact = require('../swagger/get-allcontacts-from-job');
const createJobMemoCollaborator = require('../swagger/registerJobMemoCollaborator');
const deleteJobMemoCollaborator = require('../swagger/delete-job-memo-collaborator');
const viewJobMemoCollaborator = require('../swagger/get-allcollaborators-from-job');
const viewJobMemoById = require('../swagger/get-job-memo-by-id');
const viewJobMemoBySlug = require('../swagger/get-job-memo-by-slug');
const allContactsFromJobByUserId = require('../swagger/get-match-job-contact');
const allCollaboratorsFromJobByUserId = require('../swagger/get-match-job-collaborator');
const createProjectListCollaborator = require('../swagger/registerProjectListCollaborator');
const createProjectListCandidate = require('../swagger/registerProjectListCandidate');
const createProjectList = require('../swagger/registerProjectList');
const createProjectListChat = require('../swagger/registerProjectListChat');
const createJobMemoGroupChat = require('../swagger/registerJobMemoGroupChat');
const viewProjectList = require('../swagger/all-project');
const viewProjectListChat = require('../swagger/get-all-project-list-chat');
const viewProjectListCandidates = require('../swagger/get-all-project-list-candidate');
const viewProjectListCollaborators = require('../swagger/get-all-project-list-collaborators');
const viewJobMemoGroupChat = require('../swagger/get-job-memo-group-chat');
const deleteProjectListChat = require('../swagger/delete-project-list-chat');
const deleteProjectListCandidate = require('../swagger/delete-project-list-candidate');
const deleteProjectListCollaborator = require('../swagger/delete-project-list-collaborator');
const deleteJobMemoGroupChat = require('../swagger/delete-job-memo-group-chat');


const updateProjectList = require('../swagger/update-project-list');
const viewProjectListFromUser = require('../swagger/get-allproject-from-user');

const jobmemoslimit = require('../swagger/get-job-memo-by-limit');
const jobmemosFromId = require('../swagger/get-job-memo-from-job-id');
const recruiterlimit = require('../swagger/get-recruiter-by-limit');
const recruiterKeywordsSearchLimit = require('../swagger/recruiter-keywords-search-by-limit');
const jobMemoKeywordsSearchLimit = require('../swagger//jobmemo-keywords-search-by-limit');

// const updateUserImage = require('../swagger/update-user-image.js');

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Reecho Api Documentation V1',
    description: 'Reecho Api documentation for Reecho desktop and mobile app',
    termsOfService: '',
    contact: {
      // name: 'Cheng Cui',
      // email: 'dev@reecho.com',
      // url: ''
    },
    // license: {
    //   name: 'Apache 2.0',
    //   url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    // }
  },
  basePath: '/',
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  security: [{
    bearerAuth: []
  }],
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local server'
    },
    {
      url: 'http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com',
      description: 'DEV Env'
    },
    {
      url: 'https://api.reecho.com',
      description: 'UAT Env'
    }
  ],
  paths: {
    // '/auth/user_img': {
    //   put: updateUserImage,
    // },
    '/auth/me': {
      get: getUser,
    },
    '/auth/email': {
      get: checkMail,
    },
    '/api/tags/allTags': {
      get: getAllTags,
    },
    '/api/tags/institutionTags': {
      get: getAllTags,
    },
    '/api/tags/degreeTags': {
      get: getAllTags,
    },
    '/api/tags/roleTags': {
      get: getAllTags,
    },
    '/api/tags/educationTags': {
      get: getAllTags,
    },
    '/api/tags/skillTags': {
      get: getAllTags,
    },
    '/api/tags/jobTags': {
      get: getAllTags,
    },
    '/api/tags/employerTags': {
      get: getAllTags,
    },
    '/api/tags/locationTags': {
      get: getAllTags,
    },
    '/api/tags/importantTags': {
      get: getAllTags,
    },
    '/api/tags/createSkillTag': {
      post: createTags
    },
    '/api/tags/createHearabout': {
      post: createTags
    },
    '/api/tags/createJobTag': {
      post: createTags
    },
    '/api/tags/createEmployerTag': {
      post: createTags
    },
    '/api/tags/createImportantTag': {
      post: createTags
    },
    '/api/tags/createEducationTag': {
      post: createTags
    },
    '/api/tags/createInstitutionTag': {
      post: createTags
    },
    '/api/tags/createRoleTag': {
      post: createTags
    },
    '/api/tags/createDegreeTag': {
      post: createTags
    },
    '/api/tags/createLocationTag': {
      post: createLocationTags
    },
    '/auth/login': {
      post: login
    },
    '/auth/send': {
      post: sendEmail
    },
    '/auth/updateUser': {
      put: updateUser
    },
    '/auth/updateUserDisabled': {
      put: updateUserDisabled
    },
    '/auth/register': {
      post: register
    },
    '/auth/candidateProfile': {
      get: getprofile
    },
    '/auth/candidateEducation': {
      get: getprofile
    },
    '/auth/candidateExperience': {
      get: getprofile
    },
    '/auth/candidateBenefit': {
      get: getprofile
    },
    '/auth/candidateView': {
      get: getprofile
    },
    '/auth/registerCandidateProfile': {
      post: registerCanPro
    },
    '/auth/registerCandidateExperience': {
      post: registerCanExp
    },
    '/auth/registerCandidateEducation': {
      post: registerCanEdu
    },
    '/auth/registerCandidateBenefit': {
      post: registerCanBen
    },
    '/auth/registerProfileType': {
      post: createProfileType
    },
    '/auth/registerCandidateView': {
      post: registerCanVie
    },
    '/auth/updateCandidateProfile': {
      put: updateCandidateProfile
    },
    '/auth/updateCandidateBenefit': {
      put: updateCandidateBenefit
    },
    '/auth/updateCandidateEducation': {
      put: updateCandidateEducation
    },
    '/auth/updateCandidateExperience': {
      put: updateCandidateExperience
    },
    '/auth/updateCandidateView': {
      put: updateCandidateView
    },
    '/chat/privateChat': {
      get: getPrivateChat,
    },
    '/chat/privateChatLastMessage': {
      get: getPrivateChatLastMessage,
    },
    '/chat/groupChatLastMessage': {
      get: getGroupChatLastMessage,
    },
    '/chat/privateChatLimit': {
      get: getPrivateChatByLimit
    },
    '/chat/privateChatUnseen': {
      get: getPrivateChatUnseen
    },
    '/chat/privateChatLastSeen': {
      get: getPrivateChatLastSeen
    },
    '/chat/updatePrivateChatSatus': {
      put: updatePrivateChatSatus
    },
    '/chat/createPrivateLastChannel': {
      post: createPrivateLastChannel
    },
    '/chat/createGroupLastChannel': {
      post: createGroupLastChannel
    },
    '/chat/privateLastChannel': {
      get: getPrivateLastChannel,
    },
    '/chat/groupLastChannel': {
      get: getGroupLastChannel,
    },
    '/chat/createChatGroup': {
      post: createGroupChatGroup
    },
    '/chat/createChatGroupMember': {
      post: createGroupChatMember
    },
    '/chat/allChatGroups': {
      get: getAllGroupChatgroups
    },
    '/chat/allChatGroupMembers': {
      get: getAllGroupChatMembers
    },
    '/chat/chatGroupsMsg': {
      get: getAllGroupChatMessages
    },
    '/chat/chatGroupsMsgLimit': {
      get: getGroupChatByLimit
    },
    '/chat/groupChatUnseen': {
      get: getGroupChatUnseen
    },
    '/chat/allGroupChatUnseen': {
      get: getAllGroupChatUnseen
    },
    '/chat/groupChatLastSeen': {
      get: getGroupChatLastSeen
    },
    '/chat/updateGroupChatSatus': {
      put: updateGroupChatSatus
    },
    '/chat/privateChatSearch': {
      get: privateChatSearch
    },
    '/chat/privateChatSearchImages': {
      get: privateChatSearchImages
    },
    '/chat/privateChatSearchFiles': {
      get: privateChatSearchFiles
    },
    '/chat/groupChatSearch': {
      get: groupChatSearch
    },
    '/chat/groupChatSearchImages': {
      get: groupChatSearchImages
    },
    '/chat/groupChatSearchFiles': {
      get: groupChatSearchFiles
    },
    '/auth/allCandidateView': {
      get: allVerifiedUsers
    },
    '/chat/updateUserChatStatus': {
      put: updateUserChatSatus
    },
    '/chat/updateChatGroup': {
      put: updateChatGroup
    },
    '/auth/recruiterProfile': {
      get: getrecruiterprofile
    },
    '/auth/recruiterExperience': {
      get: getrecruiterprofile
    },
    '/auth/recruiterView': {
      get: getrecruiterprofile
    },
    '/auth/recruiterRoles': {
      get: getrecruiterprofile
    },
    '/auth/profileType': {
      get: getrecruiterprofile
    },
    '/auth/registerRecruiterExperience': {
      post: registerRecExp
    },
    '/auth/registerRecruiterView': {
      post: registerRecView
    },
    '/auth/registerRecruiterProfile': {
      post: registerRecPro
    },
    '/auth/registerRecruiterRoles': {
      post: registerRecRoles
    },
    '/auth/updateRecruiterExperience': {
      put: updateRecruiterExperience
    },
    '/auth/updateRecruiterView': {
      put: updateRecruiterView
    },
    '/auth/updateRecruiterRoles': {
      put: updateRecruiterRoles
    },
    '/auth/updateRecruiterProfile': {
      put: updateRecruiterProfile
    },
    '/auth/candidateKeywordsSearch': {
      get: candidateKeywordsSearch
    },
    '/auth/recruiterKeywordsSearch': {
      get: recruiterKeywordsSearch
    },
    '/auth/candidateProfileById': {
      get: candidateProfileById
    },
    '/auth/candidateExperienceById': {
      get: candidateProfileById
    },
    '/auth/candidateEducationById': {
      get: candidateProfileById
    },
    '/auth/candidateBenefitById': {
      get: candidateProfileById
    },
    '/auth/recruiterProfileById': {
      get: recruiterProfileById
    },
    '/auth/recruiterProfileBySlug': {
      get: recruiterProfileBySlug
    },
    '/auth/allRecrutersLimit': {
      get: recruiterlimit
    },
    '/auth/recruiterKeywordsSearchLimit': {
      get: recruiterKeywordsSearchLimit
    },
    '/auth/viewPrivacy': {
      get: viewPrivacy
    },
    '/auth/viewPrivacyFromCurrentUser': {
      get: viewPrivacy1
    },
    '/auth/viewContactBookById': {
      get: viewContactBookById
    },
    '/auth/viewPrivacyById': {
      get: viewPrivacy2
    },
    '/auth/viewAllPrivacyById': {
      get: viewPrivacy3
    },
    '/auth/viewAllPrivacyByCurrentReceipt': {
      get: viewPrivacy4
    },
    '/auth/registerPrivacy': {
      post: registerPrivacy
    },
    '/auth/deletePrivacy': {
      delete: deletePrivacy
    },
    '/auth/registerPrivacy': {
      post: registerPrivacy
    },
    '/auth/setIosToken': {
      post: registerIosToken
    },
    '/auth/deleteIosToken': {
      delete: deleteIosToken
    },
    '/auth/sendIosNotification': {
      get: sendIosNotification
    },
    '/auth/registerContactBook': {
      post: registerContactBook
    },
    '/auth/deleteCandidateExperience': {
      delete: deleteCandidateExperience
    },
    '/auth/deleteCandidateEducation': {
      delete: deleteCandidateEducation
    },
    '/auth/deleteRecruiterExperience': {
      delete: deleteRecruiterExperience
    },
    '/auth/deleteContactBook': {
      delete: deleteContactBook
    },
    '/auth/sendEmailToVerify': {
      get: sendEmailToVerify
    },
    '/chat/viewChatList': {
      get: viewChatList
    },
    '/chat/viewChatListReceipt': {
      get: viewChatListReceipt
    },
    '/chat/createChatListReceipt': {
      post: registerChatListReceipt
    },
    '/chat/createChatList': {
      post: registerChatList
    },
    '/chat/updateChatList': {
      put: updateChatList
    },
    '/chat/addPrivateChatStarredSatus': {
      put: addPrivateChatStarredSatus
    },
    '/chat/removePrivateChatStarredSatus': {
      put: removePrivateChatStarredSatus
    },
    '/chat/addGroupChatStarredSatus': {
      put: addGroupChatStarredSatus
    },
    '/chat/removeGroupChatStarredSatus': {
      put: removeGroupChatStarredSatus
    },
    '/chat/deleteChatList': {
      delete: deleteChatList
    },
    '/chat/deleteChatListReceipt': {
      delete: deleteChatListReceipt
    },
    '/auth/deleteRecruiterExperience': {
      delete: deleteRecruiterExperience
    },
    '/auth/registerJobMemo': {
      post: createJobMemo
    },
    '/auth/updateJobMemo': {
      put: updateJobMemo
    },
    '/auth/deleteJobMemo': {
      delete: deleteJobMemo
    },
    '/auth/registerJobMemoCandidate': {
      post: createJobMemoCandidate
    },
    '/auth/deleteJobMemoCandidate': {
      delete: deleteJobMemoCandidates
    },
    '/auth/allJobsFromCandidate': {
      get: viewJobMemoFromCandidate
    },
    '/auth/allCandidatesFromJob': {
      get: viewCandidateFromJobMemo
    },
    '/auth/jobMemoKeywordsSearch': {
      get: jobmemoKeywordsSearch
    },
    '/auth/jobMemoKeywordsSearchLimit': {
      get: jobMemoKeywordsSearchLimit
    },
    '/auth/registerJobMemoSave': {
      post: createJobMemoSave
    },
    '/auth/registerJobMemoShare': {
      post: createJobMemoShare
    },
    '/auth/deleteJobMemoSave': {
      delete: deleteJobMemoSave
    },
    '/auth/deleteJobMemoShare': {
      delete: deleteJobMemoShare
    },
    '/auth/allJobsFromSave': {
      get: viewJobMemoFromSave
    },
    '/auth/allJobsFromShare': {
      get: viewJobMemoFromShare
    },
    '/auth/registerJobMemoContact': {
      post: createJobMemoContact
    },
    '/auth/deleteJobMemoContact': {
      delete: deleteJobMemoContact
    },
    '/auth/allContactsFromJob': {
      get: viewJobMemoContact
    },
    '/auth/registerJobMemoCollaborator': {
      post: createJobMemoCollaborator
    },
    '/auth/deleteJobMemoCollaborator': {
      delete: deleteJobMemoCollaborator
    },
    '/auth/allCollaboratorsFromJob': {
      get: viewJobMemoCollaborator
    },
    '/auth/jobMemoByUserId': {
      get: viewJobMemoById
    },
    '/auth/jobMemoFromSlug': {
      get: viewJobMemoBySlug
    },
    '/auth/allCollaboratorsFromJobByUserId': {
      get: allCollaboratorsFromJobByUserId
    },
    '/auth/allJobmemosByContactId': {
      get: allContactsFromJobByUserId
    },
    '/auth/allProjectList': {
      get: viewProjectList
    },
    '/auth/allProjectListFromUserId': {
      get: viewProjectListFromUser
    },
    '/auth/updateProjectList': {
      put: updateProjectList
    },
    '/auth/registerProjectList': {
      post: createProjectList
    },
    '/auth/registerProjectListChat': {
      post: createProjectListChat
    },
    '/auth/registerProjectListCollaborators': {
      post: createProjectListCollaborator
    },
    '/auth/registerProjectListCandidate': {
      post: createProjectListCandidate
    },
    '/auth/registerJobMemoGroupChat': {
      post: createJobMemoGroupChat
    },
    '/auth/allJobMemosLimit': {
      get: jobmemoslimit
    },
    '/auth/jobMemoFromId': {
      get: jobmemosFromId
    },
    '/auth/viewProjectListChat': {
      get: viewProjectListChat
    },
    '/auth/viewProjectListCandidates': {
      get: viewProjectListCandidates
    },
    '/auth/viewProjectListCollaborators': {
      get: viewProjectListCollaborators
    },
    '/auth/viewJobMemoGroupChat': {
      get: viewJobMemoGroupChat
    },
    '/auth/deleteProjectListChat': {
      delete: deleteProjectListChat
    },
    '/auth/deleteProjectListCandidate': {
      delete: deleteProjectListCandidate
    },
    '/auth/deleteProjectListCollaborator': {
      delete: deleteProjectListCollaborator
    },
    '/auth/deleteJobMemoGroupChat': {
      delete: deleteJobMemoGroupChat
    },
  },

};

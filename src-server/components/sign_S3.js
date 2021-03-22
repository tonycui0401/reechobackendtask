/* eslint-disable prefer-destructuring */
const aws = require('aws-sdk');
// const DB = require('../db.js');

// const { db } = DB();
// const { users } = db;


require('dotenv').config(); // Configure dotenv to load in the .env file
// Configure aws with your accessKeyId and your secretAccessKey
aws.config.update({
  region: 'us-east-1', // Put your aws region here
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey
});

const S3_BUCKET = process.env.Bucket;
// Now lets export this function so we can call it from somewhere else
exports.sign_s3 = (req, res) => {
  const s3 = new aws.S3(); // Create a new instance of S3
  const rand = Math.random().toString(36).substring(7);
  const fileName = rand;
  const fileType = req.body.fileType;
  // Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `users/${fileName}`,
    Expires: 50,
    ContentType: fileType,
    ACL: 'public-read',
  };
  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }
    // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
    const returnData = {
      signedRequest: data,
      url: `http://${S3_BUCKET}.s3.amazonaws.com/users/${fileName}`,
      filename: fileName
    };
    //  db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
    //     return 'image updated';
    //   }
    res.json({ success: true, data: { returnData } });
  });
};

exports.sign_s3_company_image = (req, res) => {
  const s3 = new aws.S3(); // Create a new instance of S3
  const rand = Math.random().toString(36).substring(7);
  const fileName = rand;
  const fileType = req.body.fileType;
  // Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `company/${fileName}`,
    Expires: 50,
    ContentType: fileType,
    ACL: 'public-read',
  };
  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }
    // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
    const returnData = {
      signedRequest: data,
      url: `http://${S3_BUCKET}.s3.amazonaws.com/company/${fileName}`,
      filename: fileName
    };
    //  db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
    //     return 'image updated';
    //   }
    res.json({ success: true, data: { returnData } });
  });
};

exports.sign_s3_chat_image = (req, res) => {
  const s3 = new aws.S3(); // Create a new instance of S3
  // const rand = Math.random().toString(36).substring(7);
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  // Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `chat_images/${fileName}`,
    Expires: 50,
    ContentType: fileType,
    ACL: 'public-read',
  };
  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }
    // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
    const returnData = {
      signedRequest: data,
      url: `http://${S3_BUCKET}.s3.amazonaws.com/chat_images/${fileName}`,
      filename: fileName
    };
    //  db.query(`update users set userimg = '${user_img}' where id =${id}`)) {
    //     return 'image updated';
    //   }
    res.json({ success: true, data: { returnData } });
  });
};

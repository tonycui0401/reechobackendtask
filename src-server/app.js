/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable camelcase */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const nodemailer = require('nodemailer');
// const juice = require('juice');
// const inlineCss = require('inline-css');


// const swaggerUi = require('swagger-ui-express');
// // const fs = require('fs');
// // const jsyaml = require('js-yaml');
// const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const xmlparser = require('express-xml-bodyparser');

// const Email = require('email-templates');
// const cors = require('cors');
const http = require('http');
const moment = require('moment');
const cors = require('cors');


const swaggerDocument = require('./swagger');
const DB = require('./db.js');

const apiTgas = require('./routes/api/tags');
const apiPosts = require('./routes/api/posts');
const apiAuth = require('./routes/auth');
const apiChat = require('./routes/chat');


const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    // user: "tongcui0401@gmail.com",
  // pass: "a135797S"
    user: 'users@reecho.com',
    pass: 'B0kunoh3rolif3!!'
  }
});

// const email = new Email({
//   transport: smtpTransport,
//   send: true,
//   preview: false,
// });


module.exports = async () => {
  const app = express();
  app.use(cors());

  const server = http.createServer(app);
  const io = require('socket.io')(server);
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(xmlparser());

  const { db } = await DB();
  app.set('db', db);

  app.use(express.static(path.join(__dirname, '../public')));

  // Enable CORS
  app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

  passport.use(require('./components/auth/local')(app));
  passport.use(require('./components/auth/jwt')(app));

  const sign_s3 = require('./components/sign_S3');

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/sign_s3', sign_s3.sign_s3);
  app.use('/sign_s3_company_image', sign_s3.sign_s3_company_image);
  app.use('/sign_s3_chat_image', sign_s3.sign_s3_chat_image);


  let host;
  let rand;
  let mailOptions;
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line padded-blocks
  app.get('/send', (req, res) => {

    // eslint-disable-next-line no-trailing-spaces
    // const link = `http://reecho-frontend.s3-website-eu-west-1.amazonaws.com/register?email=${req.query.to}`;

    // const link = `http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/auth/updateEmailStatus?email=${req.query.to}`;

    const email_code = req.query.email_code;

    // const html = '<style>div{color:red;}</style>Test<div/>';
    // email.send({
    //   template: 'hello',
    //   message: {
    //     from: 'Reecho <no-reply@Reecho.com>',
    //     to: req.query.to,
    //     subject: 'Please confirm your Email account',
    //     attachments: [
    //       // eslint-disable-next-line object-curly-newline
    //       { filename: 'images/ReEcho_Logo.svg',
    //       // eslint-disable-next-line indent
    //       cid: 'unique@kreata.ee',
    //         // eslint-disable-next-line indent
    //       path: './images/ReEcho_Logo.svg' } // TODO: replace it with your own image
    //       // eslint-disable-next-line indent
    //   ],
    //     // html: inlineCss(html, options)
    //     // .then(function(html) { console.log(html); })
    //     // eslint-disable-next-line prefer-template
    //     // html: '<head> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" ></head><div id="email" style="font-family: Poppins; padding: 4em;"><div id="content"> <div id="logo" style=" position: relative;left: -30px;"> <svg width="130" height="45" viewBox="0 0 830 291" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M134.927 224L98.7624 177.072H80.7374V222.461H62V108.48H98.1518C122.766 108.48 138.718 120.947 138.718 142.916C138.718 159.034 130.984 169.681 117.373 174.363L152.011 216.762L134.927 224ZM80.7374 160.547H99.6147C111.725 160.547 119.739 154.798 119.739 142.916C119.739 131.289 111.712 125.31 99.6147 125.31H80.7374V160.547Z" fill="#0A275C"/> <path d="M150.688 177.403C150.688 151.007 170.723 131.149 199.064 131.149C229.453 131.149 250.099 153.296 247.466 183.942L169.387 183.84C170.443 198.431 183.469 208.989 199.954 208.989C210.716 208.989 220.117 206.063 229.059 196.192L243.217 204.639C232.735 217.271 217.941 223.949 199.954 223.949C170.265 223.949 150.688 203.901 150.688 177.403ZM229.593 170.343C228.232 155.408 216.389 145.588 199.369 145.588C182.985 145.588 170.646 155.79 169.387 170.343H229.593Z" fill="#0A275C"/> <path d="M284.177 205.364H330.353V222.474H265.542V108.48H330.251V125.475H284.177V156.998L328.636 157.24V172.861H284.177V205.364V205.364Z" fill="#0A275C"/> <path d="M391.857 223.937C363.007 223.937 343.379 203.036 343.379 177.505C343.379 152.037 363.019 131.149 391.857 131.149C407.147 131.149 420.911 135.436 436.417 151.757L423.76 161.514C412.133 149.378 402.898 146.669 393.103 146.669C374.557 146.669 361.874 160.293 361.874 177.301C361.874 194.386 374.557 208.01 393.103 208.01C403.051 208.01 412.286 205.148 424.434 192.414L437.269 202.591C421.381 219.471 407.287 223.949 391.857 223.937Z" fill="#0A275C"/> <path d="M518.503 177.759C518.503 158.614 511.583 148.119 494.842 148.119C477.581 148.119 467.951 160.242 467.951 176.678V222.461H449.875V101H467.951V149.913C473.663 139.914 485.315 131.556 500.134 131.556C525.842 131.556 537.126 147.661 537.126 177.237V222.461H518.49V177.759H518.503Z" fill="#0A275C"/> <path d="M601.237 223.631C570.861 223.631 551.551 202.845 551.551 177.555C551.551 152.508 570.962 131.403 601.339 131.403C631.614 131.403 651 152.508 651 177.555C651 202.845 631.614 223.631 601.237 223.631ZM601.339 146.885C582.296 146.885 570.046 160.764 570.046 177.339C570.046 194.233 582.296 208.01 601.237 208.01C620.382 208.01 632.67 194.233 632.67 177.339C632.67 161.183 620.585 146.885 601.339 146.885Z" fill="#0A275C"/> </g> <circle opacity="0.8" cx="686.5" cy="123.5" r="22.5" fill="#0A275C"/> <ellipse opacity="0.8" cx="719" cy="123.5" rx="23" ry="22.5" fill="#1254E7"/> <circle opacity="0.8" cx="753.5" cy="123.5" r="22.5" fill="#35D8E5"/> <defs> <clipPath id="clip0"> <rect width="589" height="123" fill="white" transform="translate(62 101)"/> </clipPath> </defs> </svg> </div> <h2 id="title" style="font-weight: 600;"> Hey, just one click </h2> <p id="text"> Verify your email – and create a new kind of profile </p> <div> <div class="box one"></div> </div> <a href=' + link + 'style="text-decoration:none;font-weght: 600;color: white;background-color: #1254e7;padding: 0.5em;padding-left: 1em;padding-right: 1em;border-radius: 5px;display: inline-block;margin-top: 1em;" class="btn" id="verify-btn"> Verify my email </a></div></div>'
    //   },
    //   locals: {
    //     fname: 'John',
    //     lname: 'Snow',
    //   }
    // }).then(() => console.log('email has been sent!'));


    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');

    // const link = `http://reecho-frontend.s3-website-eu-west-1.amazonaws.com/register?email=${req.query.to}`;
    // const link = `http://${req.get('host')}/verify?id=${rand}`;


    // mailOptions = {
    //   to: req.query.to,
    //   subject: 'Please confirm your Email account',
    //   // html: `Hello,<br> Please Click on the link to verify your email.<br><a href=${link}>Click here to verify</a>`
    //   // eslint-disable-next-line prefer-template
    //   html: '<head> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" ></head><div id="email" style="font-family: Poppins; padding: 4em;"><div id="content"> <div id="logo" style=" position: relative;left: -30px;"> <svg width="130" height="45" viewBox="0 0 830 291" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M134.927 224L98.7624 177.072H80.7374V222.461H62V108.48H98.1518C122.766 108.48 138.718 120.947 138.718 142.916C138.718 159.034 130.984 169.681 117.373 174.363L152.011 216.762L134.927 224ZM80.7374 160.547H99.6147C111.725 160.547 119.739 154.798 119.739 142.916C119.739 131.289 111.712 125.31 99.6147 125.31H80.7374V160.547Z" fill="#0A275C"/> <path d="M150.688 177.403C150.688 151.007 170.723 131.149 199.064 131.149C229.453 131.149 250.099 153.296 247.466 183.942L169.387 183.84C170.443 198.431 183.469 208.989 199.954 208.989C210.716 208.989 220.117 206.063 229.059 196.192L243.217 204.639C232.735 217.271 217.941 223.949 199.954 223.949C170.265 223.949 150.688 203.901 150.688 177.403ZM229.593 170.343C228.232 155.408 216.389 145.588 199.369 145.588C182.985 145.588 170.646 155.79 169.387 170.343H229.593Z" fill="#0A275C"/> <path d="M284.177 205.364H330.353V222.474H265.542V108.48H330.251V125.475H284.177V156.998L328.636 157.24V172.861H284.177V205.364V205.364Z" fill="#0A275C"/> <path d="M391.857 223.937C363.007 223.937 343.379 203.036 343.379 177.505C343.379 152.037 363.019 131.149 391.857 131.149C407.147 131.149 420.911 135.436 436.417 151.757L423.76 161.514C412.133 149.378 402.898 146.669 393.103 146.669C374.557 146.669 361.874 160.293 361.874 177.301C361.874 194.386 374.557 208.01 393.103 208.01C403.051 208.01 412.286 205.148 424.434 192.414L437.269 202.591C421.381 219.471 407.287 223.949 391.857 223.937Z" fill="#0A275C"/> <path d="M518.503 177.759C518.503 158.614 511.583 148.119 494.842 148.119C477.581 148.119 467.951 160.242 467.951 176.678V222.461H449.875V101H467.951V149.913C473.663 139.914 485.315 131.556 500.134 131.556C525.842 131.556 537.126 147.661 537.126 177.237V222.461H518.49V177.759H518.503Z" fill="#0A275C"/> <path d="M601.237 223.631C570.861 223.631 551.551 202.845 551.551 177.555C551.551 152.508 570.962 131.403 601.339 131.403C631.614 131.403 651 152.508 651 177.555C651 202.845 631.614 223.631 601.237 223.631ZM601.339 146.885C582.296 146.885 570.046 160.764 570.046 177.339C570.046 194.233 582.296 208.01 601.237 208.01C620.382 208.01 632.67 194.233 632.67 177.339C632.67 161.183 620.585 146.885 601.339 146.885Z" fill="#0A275C"/> </g> <circle opacity="0.8" cx="686.5" cy="123.5" r="22.5" fill="#0A275C"/> <ellipse opacity="0.8" cx="719" cy="123.5" rx="23" ry="22.5" fill="#1254E7"/> <circle opacity="0.8" cx="753.5" cy="123.5" r="22.5" fill="#35D8E5"/> <defs> <clipPath id="clip0"> <rect width="589" height="123" fill="white" transform="translate(62 101)"/> </clipPath> </defs> </svg> </div> <h2 id="title" style="font-weight: 600;"> Hey, just one click </h2> <p id="text"> Verify your email – and create a new kind of profile </p> <div> <div class="box one"></div> </div> <a href=' + link + 'style="text-decoration:none;font-weght: 600;color: white;background-color: #1254e7;padding: 0.5em;padding-left: 1em;padding-right: 1em;border-radius: 5px;display: inline-block;margin-top: 1em;" class="btn" id="verify-btn"> Verify my email </a></div></div>'
    // };


    // // eslint-disable-next-line no-shadow
    // mailOptions = {
    //   from: 'users@reecho.com', // TODO: email sender
    //   to: req.query.to, // TODO: email receiver
    //   subject: 'Please confirm your Email account',
    //   // text: 'Wooohooo it works!!',
    //   html: '<head><style> h1 { color: red;}</style></head><body><h1>Welcome</h1>Embedded image: <img src="cid:unique@kreata.ee"/></body>',
    //   // template: 'index',
    //   attachments: [
    //     {
    //       filename: 'ReEcho_Logo.png',
    //       cid: 'unique@kreata.ee',
    //       path: 'ReEcho_Logo.png'
    //     } // TODO: replace it with your own image
    //   ],
    //   // context: {
    //   //     name: 'Accime Esterling',
    //   // image: '<img src="cid:unique@kreata.ee"/>'
    //   // } // send extra values to template
    // };


    mailOptions = {
      from: '"The ReEcho Team" <users@reecho.com>', // TODO: email sender
      to: req.query.to, // TODO: email receiver
      subject: 'Please confirm your Email account',
      // text: 'Wooohooo it works!!',
      html: `<head><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"><style> h1 { color: red;} img {width:130px;height:45px;} body {font-family: Poppins;} a {text-decoration: none;} #logo {position: relative;}#verify-btn {font-weight: 600;color: white;background-color: #1254e7;padding: 0.5em;padding-left: 1em;padding-right: 1em;border-radius: 5px;display: inline-block;margin-top: 1em;}</style></head><body style="font-family: Poppins;"><div id="email" style="align: center; margin: auto; font-family: Poppins, Helvetica;"><div id="content"><div id="logo" style="position: relative;"><img src="cid:unique@cheng.ee"/ style="width:130;height:45;"></div><div id="content" style="padding-left: 20px;"><div id="title" style="font-weight:600;font-size: 1.8em;">Type this code in app to verify</div>  <p id="text style="font-size: 1.3em;">Verify your email – and create a new kind of profile</p>  <a href="#" class="btn" id="verify-btn">${email_code}</a></div></div></div></body>`,
      // template: 'index',
      attachments: [
        {
          filename: 'http://reecho-frontend.s3-eu-west-1.amazonaws.com/logo/ReEcho_Logo.png',
          cid: 'unique@cheng.ee',
          path: 'http://reecho-frontend.s3-eu-west-1.amazonaws.com/logo/ReEcho_Logo.png'
        } // TODO: replace it with your own image
      ],
      // context: {
      //   name: 'Accime Esterling',
      //   // image: '<img src="cid:unique@kreata.ee"/>'
      // } // send extra values to template
    };


    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        res.end('error');
      } else {
        console.log(`Message sent: ${response.message}`);
        res.end('sent');
      }
    });


  // eslint-disable-next-line padded-blocks
  });


  // eslint-disable-next-line no-unused-vars
  // app.get('/load', (req, res) => {

  // });

  app.get('/verify', (req, res) => {
    console.log(`${req.protocol}:/${req.get('host')}`);
    if ((`${req.protocol}://${req.get('host')}`) == (`http://${host}`)) {
      console.log('Domain is matched. Information is from Authentic email');
      if (req.query.id === rand) {
        console.log('email is verified');
        res.end(`<h1>Email ${mailOptions.to} is been Successfully verified`);
      } else {
        console.log('email is not verified');
        res.end('<h1>Bad Request</h1>');
      }
    } else {
      res.end('<h1>Request is from unknown source');
    }
  });


  // app.get('/skilltags', (req, res) => {
  //   res.status(200).send('Customer results');
  // });
  /**
  * @swagger
  * /customers:
  *  get:
  *    description: Use to request all customers
  *    responses:
  *      '200':
  *        description: A successful response
  */
  app.get('/customers', (req, res) => {
    res.status(200).send('Customer results');
  });

  app.use('/auth', apiAuth(app));
  app.use('/api', apiPosts(app));
  app.use('/api', apiTgas(app));
  app.use('/chat', apiChat(app));

  /*
  app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/app/dist/index.html'));
  });
  */

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    // send the error response
    res.status(err.status || 500);
    if (err.status === 401) res.send('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=/auth"></head></html>');
    else res.send(err.message);
  });


  const clients = {};
  const users = {};
  const member = {};
  const generateMessage = (from, room, type, text, user) => ({
    from,
    room,
    type,
    text,
    user,
    createdDate: moment().valueOf()
  });

  const generateUserMessage = (from, room, type, text, name, img) => ({
    from,
    room,
    type,
    text,
    name,
    img,
    createdDate: moment().valueOf()
  });


  io.on('connection', (client) => {
    client.on('sign-in', (e) => {
      const user_id = e.user_id;
      if (!user_id) return;
      client.user_id = user_id;
      console.log('client user id');
      console.log(client.user_id);
      if (clients[user_id]) {
        clients[user_id].push(client);
      } else {
        clients[user_id] = [client];
      }
    });

    //   client.on("sign-in", e => {
    //   let user_id = e.id;
    //   if (!user_id) return;
    //   client.user_id = user_id;
    //   if (clients[user_id]) {
    //     clients[user_id].push(client);
    //   } else {
    //     clients[user_id] = [client];
    //   }
    // });


    client.on('join', (params, callback) => {
      // if (!isRealString(params.name) || !isRealString(params.room)) {
      //     return callback('Bad request');
      // }

      // console.log("get user name")
      // console.log(params.name)

      client.join(params.room_id);
      // users.removeUser(socket.id);
      // users.addUser(socket.id, params.name, params.room);

      // io.to(params.room).emit('updateUserList', users.getUserList(params.room));
      // client.emit('newMessage', generateMessage('Admin', params.room, 'Welcome to the chat app.'));


      if (!users[params.room_id]) {
        users[params.room_id] = {};
      }

      if (!member[params.room_id]) {
        member[params.room_id] = {};
      }

      // users[params.room_id].user_id = params.user_id
      if (!users[params.room_id].users) {
        users[params.room_id].users = [];
      }

      if (!member[params.room_id].users) {
        member[params.room_id].users = [];
      }


      // if(!users[params.room_id].user_id){

      // users[params.room_id].user_id = params.user_id

      if (!member[params.room_id].users.includes(params.user_id)) {
        const newUser = {
          user_id: params.user_id,
          firstname: params.firstname,
          lastname: params.lastname,
          img: params.img,
          joinDate: moment().valueOf()
        };

        member[params.room_id].users.push(params.user_id);

        users[params.room_id].users.push(newUser);


      // let tempObj = generateMessage(params.user_id, params.room_id, params.img, `${params.firstname} ${params.lastname}`, users)

      // io.to(params.room).emit('newMessage', tempObj);
      // callback({
      //     data: tempObj
      // });
      }

      client.emit('newMessage', generateMessage(params.user_id, params.room_id, params.img, `${params.firstname} ${params.lastname}`, users));

      client.broadcast.to(params.room_id).emit('newMessage', generateMessage(params.user_id, params.room_id, params.img, `${params.firstname} ${params.lastname}`, users));


      // client.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', params.room, `${params.user_id} has joined.`));

      callback();
    });


    client.on('createMessage', (message, callback) => {
    // var user = users.getUser(client.id);
    // if (user && isRealString(message.text)) {
      console.log('on create new messages');
      console.log(message);
      const tempObj = generateUserMessage(message.user_id, message.room, 'in', message.text, message.name, message.img);
      io.to(message.room).emit('newMessage', tempObj);
      callback({
        data: tempObj
      });
      // }
      console.log('get client id');

      // console.log(client.id)
      callback();
    });


    client.on('message', (e) => {
      const targetId = e.to;
      const sourceId = client.user_id;
      // io.emit("message", e)
      console.log('message data');
      console.log(targetId);
      console.log(clients[targetId]);
      console.log(sourceId);
      if (targetId && clients[targetId]) {
        clients[targetId].forEach((cli) => {
          cli.emit('message', e);
          console.log('emited this');
        });
      }

      if (sourceId && clients[sourceId]) {
        clients[sourceId].forEach((cli) => {
          cli.emit('message', e);
          console.log('emited that');
        });
      }
    });


    // io.on("connection", function(client) {
    //   client.on("sign-in", e => {
    //     let user_id = e.id;
    //     if (!user_id) return;
    //     client.user_id = user_id;
    //     if (clients[user_id]) {
    //       clients[user_id].push(client);
    //     } else {
    //       clients[user_id] = [client];
    //     }
    //   });

    //   client.on("message", e => {
    //     let targetId = e.to;
    //     let sourceId = client.user_id;
    //     if(targetId && clients[targetId]) {
    //       clients[targetId].forEach(cli => {
    //         cli.emit("message", e);
    //       });
    //     }

    //     if(sourceId && clients[sourceId]) {
    //       clients[sourceId].forEach(cli => {
    //         cli.emit("message", e);
    //       });
    //     }
    //   });


    client.on('disconnect', () => {
      if (!client.user_id || !clients[client.user_id]) {
        return;
      }
      const targetClients = clients[client.user_id];
      for (let i = 0; i < targetClients.length; ++i) {
        if (targetClients[i] == client) {
          targetClients.splice(i, 1);
        }
      }
    });
  });


  return app;
};

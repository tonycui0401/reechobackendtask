// const hostWithPort = `${process.env.DB_HOST}${process.env.DB_PORT ? `:${process.env.DB_PORT}` : ''}`;
// let connectionStr = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${hostWithPort}/${process.env.DB_NAME}`;
// if (process.env.DB_ENABLE_SSL) connectionStr += '?ssl=false';

// const schema = 'public';

// module.exports = {
//   connectionStr,
//   schema
// };

const DB_NAME = 'postgres';
const DB_USER = 'reechoadmin';
const DB_PASSWORD = 'admin12345';
const DB_HOST = 'aayj50cafa2cje.cjbdbesv54im.eu-west-1.rds.amazonaws.com';
const DB_PORT = '5432';
const DB_ENABLE_SSL = 0;

const hostWithPort = `${DB_HOST}${DB_PORT ? `:${DB_PORT}` : ''}`;
let connectionStr = `postgres://${DB_USER}:${DB_PASSWORD}@${hostWithPort}/${DB_NAME}`;
if (DB_ENABLE_SSL) connectionStr += '?ssl=false';

const schema = 'public';

module.exports = {
  connectionStr,
  schema
};

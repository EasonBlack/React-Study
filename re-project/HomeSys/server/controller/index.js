const pageService = require('./page.service');

const pg = require('pg');
const conString = "postgres://eason:admin@localhost:5432/workflow";
const pgConfig = {
    user: 'eason', //env var: PGUSER
    database: 'home', //env var: PGDATABASE
    password: 'admin', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const client = new pg.Pool(pgConfig);
client.connect();
const dailyService = require('./daily.service')(client);
const richItemService = require('./rich_item.service')(client);
const itemTypeService = require('./item_type.service')(client);
const staticsService = require('./statics.service')(client);

module.exports = {
    pageService,
    dailyService,
    richItemService,
    itemTypeService,
    staticsService
}
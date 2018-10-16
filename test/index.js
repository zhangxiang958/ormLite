const Orm = require('../index');

let dbConfig = {};

const TableName = 'sample';
const orm = new Orm({
    log: true,
    dbConfig
});
let sampleDao = dbORM(TableName);
let {dbUtil, db} = sampleDao;

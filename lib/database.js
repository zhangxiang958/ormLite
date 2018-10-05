const mysql = require('mysql');
const config = require('config');
const debug = require('debug')('ormLite');

const defaultConfig = config.get('database');

const db = exports;
let pool;

db.init = async function (config = {}) {
    config = Object.assign({}, defaultConfig, config);
    debug(config);
    pool = mysql.createPool(config);
    pool.on('acquire', (connection) => {
        console.log('mysql 数据库连接成功');
    });
};

db.commit = async function () {

};

db.rollback = async function () {

}

db.wrapTransaction = async function () {

}
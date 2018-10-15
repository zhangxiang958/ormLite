const mysql = require('mysql');
const config = require('config');
const debug = require('debug')('ormLite');

const defaultConfig = config.get('database');

const db = exports;
let pool = void 0;

db.init = async function (config = {}) {
    config = Object.assign({}, defaultConfig, config);
    debug('mysql Databse config:', JSON.stringify(config));
    pool = mysql.createPool(config);
};

db.commit = async function () {
    
};

db.rollback = async function () {

}

db.wrapTransaction = async function () {

}

db.init();
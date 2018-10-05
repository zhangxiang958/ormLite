const db = require('./database');
class Orm {
    constructor(config = {}) {
        db.init(config);
    }

    add(query, conn) {

    }
    
    del() {

    }

    get() {

    }

    update() {

    }
    
    getList() {

    }

    query() {
        
    }
}

module.exports = Orm;
const db = require('../util/database');

exports.getById = (req, cb) => {
    let results;
    let query = createGetQuery(req, req.params.id);
    console.log(query);
    db.all(query, [], (err, rows) => {
        if(err) return console.error(err);
        cb(rows);
    });
    db.close();
}

function createGetQuery(req, id) {
    let select = req.query.select;
    if (!select) select = '*';
    let table = req.params.table;
    let orderBy = req.query.orderby;
    if (!orderBy) orderBy = '';
    else orderBy = 'ORDER BY ' + orderBy;
    if (!id)
     return `SELECT ${select} FROM ${table} ${orderBy}`;
    else
      return `SELECT ${select} FROM ${table} WHERE ${table.slice(0,-1)}id=${id} ${orderBy}`;
  }
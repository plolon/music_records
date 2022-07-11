exports.getAll = (req, res, next) => {
  let query = createGetQuery(req);
  res.send(query);
};
exports.getById = (req, res, next) => {
    let query = createGetQuery(req, req.params.id);
    res.send(query);
  };

function createGetQuery(req, id) {
  let select = req.query.select;
  if (!select) select = '*';
  let table = req.params.table;
  let orderBy = req.query.orderby
  if (!orderBy) orderBy = '';
  else orderBy = 'ORDER BY ' + orderBy;
  if(!id)
  return `SELECT ${select} FROM ${table} ${orderBy}`;
  else
  return `SELECT ${select} FROM ${table} WHERE ${table.slice(0, -1)}id=${id} ${orderBy}`;
}

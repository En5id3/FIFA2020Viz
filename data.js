function data(con) {
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT age FROM fifa20 where age > 50;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}
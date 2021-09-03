var http = require('http'); 
var d3 = require("d3");
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var express = require('express');
var app = express();


resultJSON = 0
// var dat = require('./data.js')
var con = mysql.createConnection({
  host: "localhost",
  user: "as",
  password: "asla",
  database: "db",
  port: "3306"
});

function data(con) {
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT sofifa_id,age FROM fifa20 where age < 30;", function (err, result, fields) {
    if (err) throw err;
    resultJSON = JSON.stringify(result);
    console.log(JSON.stringify(result));
  });
});
}

function data_geo (con) {
con.connect(function(err) {
  if (err) throw err;
  con.query("select count(*) Total, nationality from fifa20 group by nationality; ", function (err, result, fields) {
    if (err) throw err;
    resultJSON = JSON.stringify(result);
    console.log(JSON.stringify(result));
  });
});
}


function load_json(resultJSON){
  d3.json(resultJSON);
  
} 

app.route('/sap').get(function(req,res)
{
    res.json(resultJSON);
    console.log(resultJSON);
});
app.route('/Angular').get(function(req,res)
{
fs.readFile('./lvl.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
            res.end();
        } else{
          res.writeHead(200, {
            'Content-Type' : 'text/html'  
          });
            res.write(data);
            res.end();
        }
    });      
});

app.get('/geochart',function(req,res){
    // res.send('Welcome to Guru99 Tutorials');
    data_geo(con);
    res.json(resultJSON);
});

app.get('/',function(req,res){
    res.send('Welcome to Guru99 Tutorials');
});


var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
}); 

// http.createServer(function (req, res) { 
      
//     // http header 
//     res.writeHead(200, {'Content-Type': 'text/html'});  
      
//     var url = req.url; 
      
//     if(url ==='/index') { 
//         fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Whoops! File not found!');
//             res.end();
//         } else{
//           res.writeHead(200, {
//             'Content-Type' : 'text/html'  
//           });
//             res.write(data);
//             res.end();
//         }
//     });  
//     } 
//     else if(url ==='/lvl') { 
//         fs.readFile('./lvl.html', null, function (error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Whoops! File not found!');
//             res.end();
//         } else{
//           res.writeHead(200, {
//             'Content-Type' : 'text/html'  
//           });
//             res.write(data);
//             res.end();
//         }
//     });  
//     }

//     else if(url ==='/cal_lvl') { 
//         res.send("Hello ji");  
//     }

// }).listen(8080, function() { 
      
//     // The server object listens on port 3000 
//     console.log("server start at port 3000"); 
// }); 
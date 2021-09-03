
//Install The packages or Modules
var http = require('http'); 
var d3 = require("d3");
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var express = require('express');
var app = express();

//Variable to store the JSON replies.
var resultJSON1 = 0; // reply for data 
var resultJSON2 = 0; // reply for data_geo
var resultJSON3 = 0; // reply for bar 
var resultJSON4 = 0;  // reply for pie chart
var resultJSON5 = 0;  // reply for pie chart
var resultJSON6 = 0;  // reply for pie chart
var resultJSON7 = 0; //DAshboard

//Make Connection to SQL server details
var con = mysql.createConnection({
  host: "localhost",
  user: "as",
  password: "asla",
  database: "db",
  port: "3306"
});

//MAke connection to database and Quering the database for the data based on need.

function data(con){
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT distinct potential ,value_eur FROM fifa20 where age < 25 and potential > 80;", function (err, result, fields) {
    if (err) throw err;
    resultJSON1 = JSON.stringify(result);
    console.log("json1");
  });



  con.query("select count(*) TotalPlayers, nationality from fifa20 group by nationality;", function (err, result, fields) {
    if (err) throw err;
    resultJSON2 = JSON.stringify(result);
    console.log("json2");
  });

  con.query("select wage_eur, age  from fifa20 ;", function (err, result, fields) {
    if (err) throw err;
    resultJSON3 = JSON.stringify(result);
    console.log("json3");
  });

  con.query("select team_position  , sum(wage_eur) wage_eur  from fifa20 group by team_position;", function (err, result, fields) {
    if (err) throw err;
    resultJSON4 = JSON.stringify(result);
    console.log("JSON4");
  });

    con.query("select age ,overall  from fifa20 where overall > 85;", function (err, result, fields) {
    if (err) throw err;
    resultJSON5 = JSON.stringify(result);
    console.log("JSON5");
  }); 


    con.query("select club, sum(wage_eur) wage_eur , count(*) TotalPlayers , sum(value_eur) value_euro from fifa20 group by club  HAVING value_euro > 400000000 LIMIT 7;", function (err, result, fields) {
    if (err) throw err;
    resultJSON6 = JSON.stringify(result);
    // console.log("JSON6");
  }); 

    con.query("select long_name , Age , club, wage_eur, value_eur from fifa20 where club in ('Chelsea','Manchester United','Swansea City','Liverpool','Everton','Tottenham Hotspur','Manchester City');", function (err, result, fields) {
    if (err) throw err;
    resultJSON7 = JSON.stringify(result);
    // console.log("JSON6");
  }); 




});
}

data(con);
// function data_geo (con) {
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("select count(*) Total, nationality from fifa20 group by nationality; ", function (err, result, fields) {
//     if (err) throw err;
//     resultJSON2 = JSON.stringify(result);
//     // console.log(JSON.stringify(result));
//   });
// });
//   con.end();

// }


function load_json(resultJSON){
  d3.json(resultJSON);
  
} 

// Routing modules for the various Routes which will be called  from HTML page.
app.route('/sap').get(function(req,res)
{   
    res.json(resultJSON1);
    // console.log(resultJSON1);
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


//Open Geochart HTML on /gc routing
app.route('/gc').get(function(req,res)
{
fs.readFile('./geochart.html', null, function (error, data) {
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

// Return the JSON object for plotting the chart
app.get('/geochart',function(req,res){
    // res.send('Welcome to Guru99 Tutorials');
    console.log(resultJSON2);

    res.json(resultJSON2);

});


// Return the JSON object for plotting the chart
app.get('/bar',function(req,res){
    // res.send('Welcome to Guru99 Tutorials');
    console.log(resultJSON3);

    res.json(resultJSON3);

});
//Open  HTML on / routing

app.route('/barchart').get(function(req,res)
{
fs.readFile('./histogram.html', null, function (error, data) {
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
// Return the JSON object for plotting the chart
app.get('/pie',function(req,res){
    console.log(resultJSON4);

    res.json(resultJSON4);

});

app.get('/dash',function(req,res){
    console.log(resultJSON7);

    res.json(resultJSON7);

});


app.route('/dashboard').get(function(req,res)
{
fs.readFile('./Dash.html', null, function (error, data) {
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

//Open  HTML on / routing

app.route('/piechart').get(function(req,res)
{
fs.readFile('./piechart.html', null, function (error, data) {

app.route('/gc').get(function(req,res)
{
fs.readFile('./geochart.html', null, function (error, data) {
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
// Return the JSON object for plotting the chart
app.get('/',function(req,res){
    res.send('Nah! Nah! Nah! I have not defined the default route ============> Too much Work =============> Use specific routes');
});

// Return the JSON object for plotting the chart
app.get('/scatter',function(req,res){
    // res.send('Welcome to Guru99 Tutorials');
    console.log("Sending the overall");
    res.json(resultJSON5);
});
//Open  HTML on / routing

app.route('/scatterplot').get(function(req,res)
{
fs.readFile('./scatter.html', null, function (error, data) {
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
// Return the JSON object for plotting the chart
app.get('/bubble',function(req,res){
    console.log("Sending the overall");
    res.json(resultJSON6);
});
//Open  HTML on / routing

app.route('/bubblechart').get(function(req,res)
{
fs.readFile('./bubble.html', null, function (error, data) {
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


// CReating a server on  8080 port.

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(" app listening at http://%s:%s", host, port);
}); 

// http.createServer(function (req, res) { 
//      
//     // http header 
//     res.writeHead(200, {'Content-Type': 'text/html'});  
//      
//     var url = req.url; 
//      
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
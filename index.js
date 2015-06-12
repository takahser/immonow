/**
 * Module dependencies.
 */

var express = require('express');

// Path to our public directory

var pub = __dirname + '/public';

// setup middleware

var app = express();
app.use(express.static(pub));
app.use("/css", express.static(__dirname + '/css'));
app.use("/font", express.static(__dirname + '/font'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/video", express.static(__dirname + '/video'));

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/*', function(req, res){
  console.log(req.url.replace("/",""));
  res.render(req.url.replace("/",""));
});

// change this to a better error handler in your code
// sending stacktrace to users in production is not good
app.use(function(err, req, res, next) {
  res.send(err.stack);
});

/* istanbul ignore next */
if (!module.parent) {
  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Express started on port 3000');
}
import express 		 = require('express');
// import session 		 = require('express-session');
// import expressLayouts= require('express-ejs-layouts');
import path 		 = require('path');
// import favicon 		 = require('static-favicon');
// import morgan 		 = require('morgan');
// import multer  		 = require('multer');
// import cookieParser 	= require('cookie-parser');
// import bodyParser 	= require('body-parser');

// const CGClass 		= require('./CG');
// const debug 		= require('debug')('blankMEAN');
// -- Load Controlls

let app = express();
 //   app.use(session(
 //    {
 //        secret: CGClass.secretToken, cookie: { maxAge: 3600000 },
 //        resave: false, saveUninitialized: true
 //    }));

// view engine setup
app.set('views', path.join(__dirname, './src/client/views'));
app.set('view engine', 'ejs');
// app.use(expressLayouts);
// app.use(favicon());

// app.use(bodyParser.json({limit: '5mb'}));
// app.use(bodyParser.urlencoded({
//     limit: '5mb', extended: true
// }));
// app.use(multer({dest:'/temp'}).any());

// app.use(cookieParser());
app.use('/app', express.static(path.join(__dirname, '../client/app')));
app.use('/modules', express.static(path.join(__dirname, '../../node_modules')));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     let err = new Error('Not Found' + req.originalUrl);
//     err.status = 404;
//     next(err);
// });

app.use("/*.html", (req, res) =>{
	res.render(req.params[0]+'.html');
});
app.get('/', (req:express.Request, res:express.Response)=>{
	res.render("index.html");
});

//star program
app.set('port', process.env.PORT || 8000);
let server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

// module.exports = app;

const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');


let session = require('express-session');

var whateverWeWant = {
 secret:'themostsecuresecretkeyever', // Secret name for decoding secret and such
 resave:false, // Don't resave session if no changes were made
 saveUninitialized: true, // Don't save session if there was nothing initialized
 name:'myCookie', // Sets a custom cookie name
 
 cookie: {
  secure: false, // This need to be true, but only on HTTPS
  httpOnly:false, // Forces cookies to only be used over http
  maxAge: 3600000,
 
 }
}
app.use(session(whateverWeWant));







app.use(express.static(path.join(__dirname, 'public', 'dist')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);



app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
});

app.listen(6789, ()=> {console.log('Listening on 6789')})

// This file is for beanstalk, note that dist/PATH is weird
// Should be someone copy from the code and didn't change
// Codebuild will pull this file in build folder
// Then export to beanstalk to deploy


//Importing dependencies
const express = require('express');
var path = require('path');
var port = process.env.PORT || 3000

//Starting Express app
const app = express();

//Set the base path to the angular-test dist folder
app.use(express.static(path.join(__dirname, 'dist/hexchat'))); // FIX ME

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/hexchat/index.html')); // FIX ME
});

//Starting server on port 8081
app.listen(port, () => {
    console.log('Server started!');
    console.log('on port ' + port + ', http://localhost:' + port +'/');
});

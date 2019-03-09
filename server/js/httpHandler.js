const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    var commands = ["left", "right", "up", "down"];
    //res.write(commands[Math.floor(Math.random() * commands.length)])
    res.end(commands[Math.floor(Math.random() * commands.length)]);
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end()
  }
};

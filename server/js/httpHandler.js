const fs = require('fs');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const queue = require('./messageQueue')


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.end(queue.dequeue());
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }
};

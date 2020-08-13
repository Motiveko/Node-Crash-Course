const path = require('path');


// Basename
console.log(path.basename(__filename));

// Directory Name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object(해당 경로에 있는 object반환, 여기서는 this쯤 되겠다.)
console.log(path.parse(__filename));

// Concatenate paths

console.log(path.join(__dirname, 'test','hello.html'));
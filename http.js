// http 직접 만들어보기
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer( (req, res) => {

    let filePath = path.join(__dirname, 'public', 
                    req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    let rs = fs.createReadStream(filePath);
    // rs.on('data',(chunk) =>{
    //     res.writeHead(200,{'Content-Type': contentType});
    //     res.end(chunk);
    // });
    
    // 위와 같다.
    rs.pipe(res);


    console.log('******************************************');
});
const PORT = process.env.PORT || 8012; 


server.listen(PORT, () => console.log('Server is Running.....'));
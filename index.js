// logger관련
// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message', (data)=> console.log('Called Listener : ', data));
// logger.log('Hello World');


// http 관련
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    // req.url : localhost:port/~~~ 로 접속하면 request의 url은 /~~~이다.
    // if( req.url == '/'){// root directory

    //     // mapping된 url(/)로 request가 들어오면 ./public/index.html 파일을 읽어서 response body에 넣어준다. 
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{
    //        if(err) throw err;
    //         // http message header에 값을 넣어준다. 전부 수동으로 해야한다.
    //         res.writeHead(200, {'Content-Type': 'text/html'}); 
    //         // body
    //         res.end(content);
    //     });
    // }

    // // json 반환하기! RestApi?'
    // if(req.url == '/api/users'){
    //     const users = [
    //         { name: 'MotiveKo', age:30},
    //         { name: 'Bob', age:40}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // Build file path ::: request url에 따라 동적으로 html파일을 가져온다.
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filePath);

    // Extension of file , 확장자
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type;
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                console.log(err);
                // Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                (err, content) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content,'utf8'); 
                })
            } else{
                // Some server errors
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else{
            // Success, No err
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content,'utf8');
        }

    })
});

// enviroment variable을 살펴보고 포트가 없다면 5000으로 한다, process의 enviroment가 뭔지 알아야 이해할수있을듯
// eatgo에서 작성한 .env파일인가보다!
const PORT = process.env.PORT || 5000; 

server.listen( PORT, ()=> console.log(`Server running on port ${PORT}`));
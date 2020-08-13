const http = require('http');

// Create server object
// 이거하면 웹서버가 실행된다 localhost:5000 들어가면 hello world를 받을 수 있다.. 
//서버라는것은 대단한개념이 아니었다!! , ctrl + c 하면 꺼진다!
http.createServer( (req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('server running..')); // 5000은 포트번혼
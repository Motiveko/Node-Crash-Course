const fs = require('fs');
const path = require('path');
// Transform Stream :: 뭔가 데이터를 읽어서 바꾼다, 예로는 compressing file
const zlib = require('zlib');
// zip
const gzip = zlib.createGzip();
// unzip
const gunzip = zlib.createGunzip();

// Stream을 쓰는 이유는 fs.readFile로 그냥 읽으면 한번에 다읽어야하는데 이는 버퍼 용량을 초과할 수 있기 때문이다.
// 그냥 읽는거는 fullBuffer를 쓰고 Stream은 버퍼를 조금만사용하는데(memory efficience)
// Stream이 읽는 chunk는 작은 버퍼단위로 읽기때문에 용량이 커도 짤라서 읽으므로 괜찮다.

var fileName = 'bigfile';
var fileExt = '.pdf';
const readStream = fs.createReadStream('./'+fileName+'_copied'+fileExt+'.gz');

const writeStream = fs.createWriteStream('./'+fileName+'_uncompressed'+fileExt);

// chunk를 다 읽어들이면 writeStream이 그것으로 write! 
// utf8로 readStream을 만들지 않아도 쓸때는 알아서 utf8로 된다!?    
// bigFile.pdf 같은거를 배낄때는 readStream을 utf8로 텍스트는 같은거같은데 몬가 잘못복사됬는지 파일이 이상해진다..
// readStream.on('data',(chunk) =>{
//     writeStream.write(chunk);   
// });

// pipe -> 위의 식을 간단하게 만들었다.
// readStream.pipe(writeStream);

// Chaining Pipe :: zip stream
// readstream -> gzip으로 chunk 보냄 , 이걸 읽어서 compress, 그리고 writeStream으로 pipeout
// 압축된 파일이기때문에 확장자가 ~~~.~~.gz 로 .gz를 해줘야한다. 그리고 압축 풀면 볼 수 있다!
// readStream.pipe(gzip).pipe(writeStream);

// Unzip
readStream.pipe(gunzip).pipe(writeStream);

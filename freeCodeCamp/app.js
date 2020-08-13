const fs = require('fs');
const path = require('path');

// Stream을 쓰는 이유는 fs.readFile로 그냥 읽으면 한번에 다읽어야하는데 이는 버퍼 용량을 초과할 수 있기 때문이다.
// 그냥 읽는거는 fullBuffer를 쓰고 Stream은 버퍼를 조금만사용하는데(memory efficience)
// Stream이 읽는 chunk는 작은 버퍼단위로 읽기때문에 용량이 커도 짤라서 읽으므로 괜찮다.
const readStream = fs.createReadStream(path.join(__dirname,'bigfile.pdf'));

const writeStream = fs.createWriteStream('bigfile_copied.pdf');

readStream.on('data',(chunk) =>{
    // chunk를 다 읽어들이면 writeStream이 그것으로 write! 
    // utf8로 readStream을 만들지 않아도 쓸때는 알아서 utf8로 된다!?
    writeStream.write(chunk);
})

// bigFile.pdf 같은거를 배낄때는 readStream을 utf8로 텍스트는 같은거같은데 몬가 잘못복사됬는지 파일이 이상해진다..
// 이게 직접적으로 안쓰이는데 아래의 것들을 하려면 이렇게 얻어와야된다. 무슨원리지??
const url = require('url'); 

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

//Hostname (dosen't include port no)
console.log(myUrl.hostname); 

//Pathname
console.log(myUrl.pathname);

// Serialize Query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// Loop throug params
myUrl.searchParams.forEach( (value, name) => {
    console.log(`${name} :: ${value}`);
});
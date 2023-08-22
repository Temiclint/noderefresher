const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //setting header content

    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/second' :
            path += 'second.html';
            res.statusCode = 200;
            break;
        case '/secondtime' :
            res.statusCode = 301;
            res.setHeader('location', '/second');
            res.end();
            break;
        default: 
            path += '404.html';
            break;
    }
    
        

    //sending html files

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });

});

server.listen(3000, "localhost", ()=>{
    console.log("server listening on port 3000")
})
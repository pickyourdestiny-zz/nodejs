const http = require ('http');  //load the built in http module

//req is the client request, res is the server response  (asynchronous)

const server = http.createServer((req,res)=>{

    if(req.url === '/'){

        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){

        res.end('here is our short history')
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back to home</a>
    `)
})

server.listen(5000)


// type in node app.js and then open a browser window, and type http://localhost:5000/

// notice node starts a web server, which continuously listens for http requests.


import http from 'http';

export default class ServerObj{
    
    server;

    constructor(){
        this.server = http.createServer((request, response) => {
            // response.write('Message');
            // if the Content type is not html it will parse the text as a row-text

            // response.setHeader('Content-Type', 'text/html');
            // response.statusCode = 200;
            // equivalent 
            response.writeHead(500, {'content-type': 'application/json'})
            response.end(JSON.stringify({message: 'Server Error'}));
            // console.log(request.url);
            // console.log(request.method);
        });
        
    }

    call_listen(){
        // The callback function is executed right after listing 
        const PORT = process.env.PORT;
        this.server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    }
    


   
}
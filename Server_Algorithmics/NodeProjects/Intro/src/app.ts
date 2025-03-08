import http, {Server,IncomingMessage, ServerResponse} from 'http'
/**
 * There are 3 ways to use the file system: 
 * Synchronized(not recommanded) | Asynchronised (async/await) | Promised Based
*/
import fs from 'fs/promises'

/**
 * When using ESModuel you can't access the __filename or __dirname 
 * thus we have to create them ourselves
 * import.meta.url => will give us the url to whatever the url object file is in
 * we extract just the path from the URL object 
 */
import url from 'url'
import path from 'path'

export default class App{

    private server: Server;
    private __filename;
    private __dirname;
    static readonly PORT = process.env.PORT; 

    constructor(){
        // create the __filename / __dirname
        this.__filename = url.fileURLToPath(import.meta.url)
        this.__dirname = path.dirname(this.__filename)
        this.server = http.createServer(App.#serverBehaviour);
        
    }

    static #serverBehaviour(req: IncomingMessage, res: ServerResponse){
        try{
            if(req.url == '/'){
                res.writeHead(200, {'content-type': 'text/html'});
                res.end('<h1>MAiN PAGE</h1>')
            }else if (req.url == '/about'){
                res.writeHead(200, {'content-type': 'text/html'});
                res.end('<h1> ABOUT PAGE </h1>');
            }else{
                res.writeHead(404, {"content-type": 'text/html'})
                res.end('<h1> NOT FOUND </h1>')
            }
        }catch(error){
            res.writeHead(500, {"content-type": 'text/html'})
            res.end('Server Error...')
        }
    }

    runServer(){
        console.log(`\x1b[32mServer is running on port: ${App.PORT} \x1b[0m`)
        this.server.listen(App.PORT);
    }

    infoPaths(){
        return {
            __filename: this.__filename,
            __dirname: this.__dirname
        }
    }
}
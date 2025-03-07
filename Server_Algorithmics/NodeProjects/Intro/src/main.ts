import ServerObj from './server.js'

function run(): void {
    console.log("Start App...")
    // const {generateText, generateNumber}: {generateText: Function, generateNumber: Function} = require('./utils')
    // console.log(`${generateText()} | ${generateNumber()}`);

    // Using ES modules using dynamic importing 
    // !! Because the code is executed in the dist folder on the js files
    // the module must be prefixed by the .js ending
    // Dynamic importing is onyl allowed from es2020 on 
    import('./esmod.js').then( module => {
        const func = module.getPost
        console.log(func())
    }).catch(error => {
        console.error(`Error loading the esmod module: ${error}`)
    })
}

// Use an IIFE to run the main code
(function() {
    const server = new ServerObj();
    server.call_listen()
})();
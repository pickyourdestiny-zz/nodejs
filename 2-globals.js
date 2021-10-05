// GLOBALS  - NO WINDOW ACCESS IN NODE JS (NO BROWSER WINDOW)!!!

//  __dirname - path to current directly
//  __filename - file name
//  require  - function to use modules (CommonJS)
//  module  - info about current module (file)
//  process - info about env where the program is being executed

console.log(__dirname)
setInterval(()=>{

    console.log('hello world')

}, 1000)
//Node js synchronous approach

// synchronous tasks are potentially cpu intensive.. if there are extensive read/write operations then the processor will be busy on those tasks (for a limited number of users)

const {readFileSync, writeFileSync} = require('fs');

//on top we only import the one function, below we import the entire fs module (all functions)
//timestamp 1:11.45

// const fs= require('fs')
// fs.readFileSync
// fs.writeFileSync

console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


// if the file already exists writeFileSync will overwrite it (no error) by default

// third option is a flag, if set to 'a' you can append to an existing file.

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})

console.log('done with this task')
console.log('starting the next one')
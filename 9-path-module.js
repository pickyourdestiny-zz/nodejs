const path = require ('path')

console.log(path.sep)


const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath)


const base = path.basename(filePath)

console.log(base)

// use global variable __dirname to resolve the absolute path of a relative path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)
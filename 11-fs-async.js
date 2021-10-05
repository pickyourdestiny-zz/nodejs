// asynchronous file methods (asynchronous has call backs when the event is done)

const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8' ,(err,result)=>{

    if(err){
        console.log(err)
    }

    // need to read the second file in the callback if there are no errors
    // console.log(result)

    const first = result
    readFile('./content/second.txt', 'utf8', (err,result)=>{

        if(err){
            console.log(err)
        }
    
        const second = result
        writeFile(
            
        './content/result-async.txt', 
        `Here is the result ${first}, ${second}`, 
         (err,result)=>{

            if (err){
                console.log(err)
                return
            }

            console.log('done with this task')


        })
        
    })
})
// this is where nodejs can server other users with more tasks and continue on in the application
// the first task is served asynchronously and the program moves on (doesn't wait for the first task to finish)
console.log('starting next task')
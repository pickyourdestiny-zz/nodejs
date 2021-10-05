// npm - global command, comes with node
// npm --version

//1:50

//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important information about package/project)

// 3 ways to install it:

//1- manual approach (create package.json in the root, create properties, etc)
//2- npm init  (step by step installer, enter to skip)
//3- npm init -y (everything default)

// when you install a package like lodash and type in npm install lodash, the 
// package.json file gets updated with a new dependency (lodash) **** and a folder called node_modules is created automatically
// and contains the package dependencies for the project (like lodash).. once installed you can call it


const _= require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);

console.log(newItems)

// 2.04 - github

// the package json contains the dependencies so you create a .gitignore file that excludes node_modules, when you clone the repo run "npm install"
// this automatically installs all npm depencies to your clone!

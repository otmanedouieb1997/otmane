#!/usr/bin/env node
const welcome = require('cli-welcome')
const {name, version, description} = require('./package.json')

welcome({
    title : name,
    tagLine : 'Start Learn NodeJs',
    description : description,
    version : version,
    bgColor : '#00FF00',
    color : '#000000',
    clear : true
})

console.log(name)



console.log('Hello')
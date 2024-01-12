import EventEmitter from 'events';

const myEmitter = new EventEmitter();

function myName(){
    console.log("My Name is Srushti")
}

myEmitter.on("name", myName)
myEmitter.emit("name")
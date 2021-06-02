// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(name) {
  /*  if (name === "Summer") {
        return "Hello, Summer!"
    } else if (name ===" Obi");
    {
        return "Hello, Obi!";
  }*/
    if (name === undefined) {
        return "Hello, World!";
    } if (name === true) {
        return "Hello, World!";
    }if (name === false) {
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
}

function isFive(input){
    return (input === true);
}
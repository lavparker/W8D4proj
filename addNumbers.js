const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numsLeft = 10

function addNumbers(sum, numsLeft, completionCallback){
    console.log(numsLeft)
    if (numsLeft === 0) {
        completitionCallback(sum);
    } debugger
    if (sum === undefined) {
        let sum = 0
    }
    reader.question("Give me a number: ", function (answer) {
        sum += answer
        numsLeft -= 1
        console.log(numsLeft)
        showSubtotal()
        addNumbers(sum, numsLeft, completionCallback)
    });
    
}

function completionCallback(sum) {
    console.log(`Your final total is ${sum}`);
}

console.log(addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)));

function showSubtotal(sum){
    console.log(`Your subtotal is ${sum}`)
    
}


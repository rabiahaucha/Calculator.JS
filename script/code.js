// function display(value) {
//     += value;
// }
let sum = "";
let decimal = [];
let output = document.querySelector("#output");

function display(symbol) {
    let inpArr = output.value.split('');
    if(symbol == '.' && decimal.includes('.')){
        return;
    } else if(symbol == '+' && inpArr[inpArr.length-1] == '+' || symbol == '-' && inpArr[inpArr.length-1] == '-' || symbol == '*' && inpArr[inpArr.length-1] == '*' || symbol == '/' && inpArr[inpArr.length-1] == '/' ){
        return;
    } 
    else if (symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/') {
        sum = sum + symbol;
        document.getElementById("output").value = sum;
        decimal = [];

    } 
    else {
        sum = sum + symbol;
        document.getElementById("output").value = sum;
        decimal.push(symbol);

    }
}

// function evaluate() {
//     // document.getElementById('output').innerText = eval(`${document.getElementById('output').innerText}`).toFixed(2);
//     output.textContent = output.textContent;
// }

function backspace() {
  sum = sum.slice(0, -1);
  document.getElementById("output").value = sum;
}

document.querySelector("#equal").addEventListener("click", () => {
  output.value = eval(output.value).toFixed(2);
});

document.querySelector('#clear').addEventListener('click', () => {
    clear()
})

function clear() {
    sum = "";
    document.getElementById('output').innerText = sum;

    output.value = "";
}



 

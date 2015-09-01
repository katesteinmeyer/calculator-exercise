 var calculator = document.createElement("div");
    calculator.id = "calculator";
    document.body.appendChild(calculator);
    var header = document.createElement("h3");
    header.innerText = "Calculator";
    calculator.appendChild(header);
    var num = 1;
for (i=1; i<=12; i++) {
    var row1 = document.createElement("button");
        if (i == 4) {
            row1.innerText = "+";
        }
            else if (i == 8) {
                row1.innerText = "-";
            }
               else if (i == 12) {
                row1.innerText = "="; 
            }
                else {
                    row1.innerText = num
                    num++
                }
                    calculator.appendChild(row1);
}
    var solution_bar = document.createElement("p");
    solution_bar.id = "solution_bar";
    calculator.appendChild(solution_bar);

var button1 = document.getElementsByTagName('button')[0];
console.log(button1);

function giveMeYourValue(e){
    console.log(e.target.value);
}

button1.addEventListener('click', giveMeYourValue);

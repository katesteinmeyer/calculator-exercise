 var div_element1 = document.createElement('div');
 div_element1.innerHTML = " ";
 document.body.appendChild(div_element1);
 div_element1.id = 'calculator';

var header = document.createElement('h1');
header.innerHTML = "Calculate All The Things";
document.getElementById('calculator').appendChild(header);

var div_element2 = document.createElement('div');
div_element2.innerHTML="1";
document.getElementById('calculator').appendChild(div_element2);

var div_element3 = document.createElement('div');
div_element3.innerHTML="2";
document.getElementById('calculator').appendChild(div_element3);

var div_element4 = document.createElement('div');
div_element4.innerHTML="3";
document.getElementById('calculator').appendChild(div_element4);

var div_element5 = document.createElement('div');
div_element5.innerHTML="+";
document.getElementById('calculator').appendChild(div_element5);

var div_element6 = document.createElement('div');
div_element6.innerHTML="4";
document.getElementById('calculator').appendChild(div_element6);

var div_element7 = document.createElement('div');
div_element7.innerHTML="5";
document.getElementById('calculator').appendChild(div_element7);

var div_element8 = document.createElement('div');
div_element8.innerHTML="6";
document.getElementById('calculator').appendChild(div_element8);

var div_element9 = document.createElement('div');
div_element9.innerHTML="-";
document.getElementById('calculator').appendChild(div_element9);


var div_element10 = document.createElement('div');
div_element10.innerHTML="7";
document.getElementById('calculator').appendChild(div_element10);

var div_element11 = document.createElement('div');
div_element11.innerHTML="8";
document.getElementById('calculator').appendChild(div_element11);

var div_element12 = document.createElement('div');
div_element12.innerHTML="9";
document.getElementById('calculator').appendChild(div_element12);

var div_element13 = document.createElement('div');
div_element13.innerHTML="=";
document.getElementById('calculator').appendChild(div_element13);

var div_solution = document.createElement('div');
div_solution.innerHTML=" ";
document.getElementById('calculator').appendChild(div_solution);
div_solution.id = 'solution_bar';


const heading = document.createElement("h1");
heading.id = "title";
heading.textContent = "ETCH A SKETCH PAD";
document.body.appendChild(heading);
let title = document.getElementById("title");
title.setAttribute("style", "text-align: center; color: #272a2e; text-decoration: underline; font-weight: bold; margin-top: 0px; margin-bottom: 0px;");

const para = document.createElement("p");
para.innerHTML = `Hit the "Reset" button to choose the number of rows!`;
para.setAttribute("style", "margin: auto; font-weight: bold; text-align: center; color:#32a852; text-shadow: 1px 1px white; font-size: 1.3rem;");
document.body.appendChild(para);


const mainDiv = document.createElement("div");
mainDiv.id = "main";
document.body.appendChild(mainDiv);
let main = document.getElementById("main");
main.setAttribute("style", "display: flex; flex-wrap: wrap; width: 500px; height: 500px; margin: auto;")

const btnDiv = document.createElement("div");
document.body.appendChild(btnDiv);
btnDiv.setAttribute("style", " max-width: 500px; margin: auto;")

//this button will clear the page resetting color   
const button = document.createElement("button");
button.id = "btn";
button.innerHTML = "clear";
btnDiv.appendChild(button);
document.querySelector("#btn").addEventListener("click",()=> {window.location.reload(true)});
btn.setAttribute("style", "margin:3px; height: 50px; width: 50px; border-radius: 50%; display: inline; box-shadow: 2px 2px black; border: none; font-size: bold: cursor: pointer; background: #ed0909;")

//this button resets the grid
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener('click', reset);
btnDiv.appendChild(resetButton);
resetButton.setAttribute("style", "margin: 3px; height: 50px; width: 50px; border-radius: 50%; display: inline; box-shadow: 2px 2px black; border: none; font-size: bold: cursor: pointer; background:#32a852; float: right;")



function makeGrid(n) {
  let divPercent = 100 / n;
  let gridPercent = `${divPercent}%`;
  for (let i = 0; i < n * n; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.style.height = gridPercent;
    gridDiv.style.width = gridPercent;
    gridDiv.style.boxSizing = 'border-box';
    gridDiv.style.backgroundColor = '#abc2e0';
    gridDiv.style.border = '1px solid #CCD6DD';
    gridDiv.style.borderRadius = '6px';

    gridDiv.addEventListener(
      'mouseover',
      () => (gridDiv.style.backgroundColor = randomColor())
    );
    main.appendChild(gridDiv);
  }
}

function randomColor() {
  let randColor = '#';
  let hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 6; i++) {
    randColor += hexValue[Math.floor(Math.random() * 16)];
  }

  return randColor;
}

function reset() {
  divs = document.getElementsByName('div');
  for (let i = 0; i < divs.lenght; i++) {
    divs[i].style.backgroundColor = 'gray';
  }
  let squares = prompt('How many squares would you like?', '4');
  mainDiv.innerHTML = '';
  makeGrid(squares);
}

makeGrid(5);

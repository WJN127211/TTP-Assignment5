const grid = document.getElementById("grid");

let color;
let row = 1;
let column = 1;

//add the rows 
function addrows() {
    const newrow = document.createElement("tr");

    //depend on the number of columns, we add the rows
    for (let i = 0; i < column; i++) {
        const newcell = document.createElement("td");
        newrow.appendChild(newcell);
    }
    grid.appendChild(newrow);
    row++;
    //make sure the new cell color can be change
    mousetocell();


}

//add the columns
function addcols() {
    const rows = grid.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        const newcell = document.createElement("td");
        rows[i].appendChild(newcell);
    }
    column++;
    //make sure new cell color can be change
    mousetocell();

}

//remove the rows when we click the button
function remrows() {
    //only when we have rows we can delete the row
    if (row > 1) {
        //delete the lastest one
        grid.deleteRow(-1);
        row--;
    }
}

//remove the colums from the grid
function remcols() {
    //only when we have columns we can delete
    if (column > 1) {
        const rows = grid.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            rows[i].deleteCell(-1);
        }
        column--;
    }

}

//when we set the color, we read the color from the select
function changecolor() {
    const colorSelect = document.getElementById("color");
    color = colorSelect.value;

}

//use to change cell color, we have to use it frequently
function changecellcolor(cell) {
    cell.style.backgroundColor = color;
}

//the next is to change the cell color when we click the cell

let mousedown = false;

//if mouse is down, we can change the color
function mouseDownEvent(cell) {
    mousedown = true;
    changecellcolor(cell);

}

//if mouse keep down, it will keep change the color
function mouseOverEvent(cell) {
    if (mousedown) {
        changecellcolor(cell);
    }
}

//if the mouse up stop change the color
function mouseUpEvent(cell) {
    mousedown = false;
}

//in this function, we connect the mouse event, cell, and change color
function mousetocell() {
    const cells = grid.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.addEventListener("mousedown", function () {
            mouseDownEvent(cell);
        });

        cell.addEventListener("mouseover", function () {
            mouseOverEvent(cell);
        });

        cell.addEventListener("mouseup", function () {
            mouseUpEvent(cell);
        });
    }
}

//fill all cell that has not filled
function filluncolor() {
    const cells = grid.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (!cell.style.backgroundColor) {
            changecellcolor(cell);
        }
    }
}

//fill all cells with the currently selected color
function fillall() {
    const cells = grid.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        changecellcolor(cell);

    }

}

//clear all cells/restore all cells to their original/initial color
function clearall(){
    const cells = grid.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        cell.style.backgroundColor="";

    }
}

mousetocell();






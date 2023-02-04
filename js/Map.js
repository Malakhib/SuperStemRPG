import { CreateMap } from "./Mapcreator.js";

//import {CreateMap} from "./Mapcreator.js";
const mapAccess = document.querySelector('#mapAccess')
// var map = CreateMap();
let displaymapAccess = null;
export var grid = []
const wall = "#";
const floor = "_";
//let grid = CreateMap();
let characterX = 4, characterY = 1;

export function ResetGrid(){
    grid = CreateMap();
}
//Resetgrid();


export function RefreshMap() {

    let rowString = "";
    if (displaymapAccess != null)
        mapAccess.removeChild(displaymapAccess);
    displaymapAccess = document.createElement("div");
        
    for(let i = 0; i < grid.length; i++){
        rowString = "";
        for(let j = 0; j < grid[0].length; j++){
            rowString += grid[i][j]; 
        }
        let row = document.createElement("div");
        row.classList.add("mapAccessRow");
        row.innerHTML = rowString;
        displaymapAccess.appendChild(row);
    }

    mapAccess.appendChild(displaymapAccess);
}

export function PlaceCharacter() {
    let rowcoord = Math.floor((Math.random() + 1) * 5)
    let colcoord = Math.floor((Math.random() + 1) * 10)
    grid[rowcoord][colcoord] = "c"
    characterX = colcoord;
    characterY = rowcoord;
}

export function PlaceWall() {
    let rowcoord = Math.floor((Math.random() + 1) * 5)
    let colcoord = Math.floor((Math.random() + 1) * 10)
    if (grid[rowcoord][colcoord] != "_") {
        PlaceWall();
        return;
    }
    grid[rowcoord][colcoord] = "s"
}

export function MoveCharacter(direction) {
    if (!CanCharacterMoveInDir(direction)) {
        return;
    }
    if (direction == "up") {
        if (characterY != 0) {
            grid[characterY][characterX] = "_";
            characterY--;
            grid[characterY][characterX] = "c";
        }
    } else if (direction == "down") {
        if (characterY != grid.length - 1) {
            grid[characterY][characterX] = "_";
            characterY++;
            grid[characterY][characterX] = "c";
        }
    } else if (direction == "left") {
        if (characterX != 0) {
            grid[characterY][characterX] = "_";
            characterX--;
            grid[characterY][characterX] = "c";
        }
    } else if (direction == "right") {
        if (characterX != grid[characterY].length - 1) {
            grid[characterY][characterX] = "_";
            characterX++;
            grid[characterY][characterX] = "c";
        }
    }
    RefreshMap();
}

export function Fight() {
    //Fights an adjacent character
}

export function IsMonsterNearby() {
    //returns if a monster is nearby
}

export function CanCharacterMoveInDir(direction) {
    if (direction == "up") {
        if (characterY != 0 && !IsMovementBlocker(grid[characterY - 1][characterX])) {
            return true;
        }
        return false;
    } else if (direction == "down") {
        if (characterY != grid.length - 1 && !IsMovementBlocker(grid[characterY + 1][characterX])) {
            return true;
        }
        return false;
    } else if (direction == "left") {
        if (characterX != 0 && !IsMovementBlocker(grid[characterY][characterX - 1])) {
            return true;
        }
        return false;
    } else if (direction == "right") {
        if (characterX != grid[characterY].length - 1 && !IsMovementBlocker(grid[characterY][characterX + 1])) {
            return true;
        }
        return false;
    }
    return false;
}


export function IsMovementBlocker(contents) {
    if (contents == "#")
        return true;
    return false;
}

export function MoveCharacterRandom() {
    let num = Math.floor(Math.random() * 4);
    if (num == 0)
        MoveCharacter("up");
    else if (num == 1)
        MoveCharacter("down");
    else if (num == 2)
        MoveCharacter("left");
    else if (num == 3)
        MoveCharacter("right");
}
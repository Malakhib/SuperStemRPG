import { CreateMap } from "./Mapcreator.js";

//import {CreateMap} from "./Mapcreator.js";
const mapAccess = document.querySelector('#mapAccess')
// var map = CreateMap();
let displaymapAccess = null;
export var grid2 = []
//let grid2 = CreateMap();
let characterX = 4, characterY = 1;


export function ResetGrid(){
    grid2 = CreateMap();
}
//Resetgrid();


export function RefreshMap() {

    let rowString = "";
    if (displaymapAccess != null)
        mapAccess.removeChild(displaymapAccess);
    displaymapAccess = document.createElement("div");
        
    for(let i = 0; i < grid2.length; i++){
        rowString = "";
        for(let j = 0; j < grid2[0].length; j++){
            rowString += grid2[i][j]; 
        }
        let row = document.createElement("div");
        row.classList.add("mapAccessRow");
        row.innerHTML = rowString;
        displaymapAccess.appendChild(row);
    }

    mapAccess.appendChild(displaymapAccess);
}

export function PlaceCharacter() {
    let rowcoord = Math.floor(Math.random() * 5)
    let colcoord = Math.floor(Math.random() * 10)
    grid2[rowcoord][colcoord] = "c"
    characterX = colcoord;
    characterY = rowcoord;
}

export function PlaceWall() {
    let rowcoord = Math.floor(Math.random() * 5)
    let colcoord = Math.floor(Math.random() * 10)
    if (grid2[rowcoord][colcoord] != "_") {
        PlaceWall();
        return;
    }
    grid2[rowcoord][colcoord] = "s"
}

export function Movecharacter(direction) {
    if (!CanCharacterMoveInDir(direction)) {
        console.log("can't move " + direction + "!");
        return;
    }
    if (direction == "up") {
        if (characterY != 0) {
            grid2[characterY][characterX] = "_";
            characterY--;
            grid2[characterY][characterX] = "c";
        }
    } else if (direction == "down") {
        if (characterY != grid2.length - 1) {
            grid2[characterY][characterX] = "_";
            characterY++;
            grid2[characterY][characterX] = "c";
        }
    } else if (direction == "left") {
        if (characterX != 0) {
            grid2[characterY][characterX] = "_";
            characterX--;
            grid2[characterY][characterX] = "c";
        }
    } else if (direction == "right") {
        if (characterX != grid2[characterY].length - 1) {
            grid2[characterY][characterX] = "_";
            characterX++;
            grid2[characterY][characterX] = "c";
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
        if (characterY != 0 && !IsMovementBlocker(grid2[characterY - 1][characterX])) {
            return true;
        }
        return false;
    } else if (direction == "down") {
        if (characterY != grid2.length - 1 && !IsMovementBlocker(grid2[characterY + 1][characterX])) {
            return true;
        }
        return false;
    } else if (direction == "left") {
        if (characterX != 0 && !IsMovementBlocker(grid2[characterY][characterX - 1])) {
            return true;
        }
        return false;
    } else if (direction == "right") {
        if (characterX != grid2[characterY].length - 1 && !IsMovementBlocker(grid2[characterY][characterX + 1])) {
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
        Movecharacter("up");
    else if (num == 1)
        Movecharacter("down");
    else if (num == 2)
        Movecharacter("left");
    else if (num == 3)
        Movecharacter("right");
}
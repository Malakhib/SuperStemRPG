const map = document.querySelector('#map')
let displayMap = null;
export let grid = []
let characterX = 0, characterY = 0;


export function ResetGrid() {
    for (let i = 0; i < 5; i++) {
        grid[i] = []
        for (let j = 0; j < 10; j++) {
            grid[i].push('_')
        }
    }
}
ResetGrid();


export function CreateMap() {
    if (displayMap != null)
        map.removeChild(displayMap);
    displayMap = document.createElement("div");
    for (let i = 0; i < grid.length; i++) {
        let rowText = ""

        for (let j = 0; j < grid[i].length; j++) {
            rowText += grid[i][j] + " ";
        }
        let row = document.createElement("div");
        row.classList.add("mapRow");
        row.innerHTML = rowText;
        displayMap.appendChild(row);
    }
    map.appendChild(displayMap);
}

export function PlaceCharacter() {
    let rowcoord = Math.floor(Math.random() * 5)
    let colcoord = Math.floor(Math.random() * 10)
    grid[rowcoord][colcoord] = "C"
    characterX = colcoord;
    characterY = rowcoord;
}

export function PlaceWall() {
    let rowcoord = Math.floor(Math.random() * 5)
    let colcoord = Math.floor(Math.random() * 10)
    if (grid[rowcoord][colcoord] != "_") {
        PlaceWall();
        return;
    }
    grid[rowcoord][colcoord] = "W"
}

export function MoveCharacter(direction) {
    if (!CanCharacterMoveInDir(direction)) {
        console.log("Can't move " + direction + "!");
        return;
    }
    if (direction == "up") {
        if (characterY != 0) {
            grid[characterY][characterX] = "_";
            characterY--;
            grid[characterY][characterX] = "C";
        }
    } else if (direction == "down") {
        if (characterY != grid.length - 1) {
            grid[characterY][characterX] = "_";
            characterY++;
            grid[characterY][characterX] = "C";
        }
    } else if (direction == "left") {
        if (characterX != 0) {
            grid[characterY][characterX] = "_";
            characterX--;
            grid[characterY][characterX] = "C";
        }
    } else if (direction == "right") {
        if (characterX != grid[characterY].length - 1) {
            grid[characterY][characterX] = "_";
            characterX++;
            grid[characterY][characterX] = "C";
        }
    }
    console.log(characterY, characterX);
    CreateMap();
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
    if (contents == "W")
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
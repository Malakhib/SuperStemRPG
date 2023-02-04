const mapAccess = document.querySelector('#mapAccess')

class Map {

    constructor() {
        ResetGrid();
    }

    ResetGrid() {
        grid = CreateMap();
    }

    RefreshMap() {
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

    PlaceWall() {
        let rowcoord = Math.floor(Math.random() + 1 * 5)
        let colcoord = Math.floor(Math.random() + 1 * 10)
        if (grid[rowcoord][colcoord] != "_") {
            PlaceWall();
            return;
        }
        grid[rowcoord][colcoord] = "#"
    }

    IsMovementBlocker(contents) {
        if (contents == "#")
            return true;
        return false;
    }
}
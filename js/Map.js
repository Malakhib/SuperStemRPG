const mapAccess = document.querySelector('#mapAccess')
class Map {

    constructor() {
        ResetGrid();
    }


    ResetGrid() {
        for (let i = 0; i < 5; i++) {
            grid[i] = []
            for (let j = 0; j < 10; j++) {
                grid[i].push('_')
            }
        }
    }


    RefreshMap() {
        if (displaymapAccess != null)
            mapAccess.removeChild(displaymapAccess);
        displaymapAccess = document.createElement("div");
        for (let i = 0; i < grid.length; i++) {
            let rowText = ""

            for (let j = 0; j < grid[i].length; j++) {
                rowText += grid[i][j] + " ";
            }
            let row = document.createElement("div");
            row.classList.add("mapAccessRow");
            row.innerHTML = rowText;
            displaymapAccess.appendChild(row);
        }
        mapAccess.appendChild(displaymapAccess);
    }

    PlaceWall() {
        let rowcoord = Math.floor(Math.random() * 5)
        let colcoord = Math.floor(Math.random() * 10)
        if (grid[rowcoord][colcoord] != "_") {
            PlaceWall();
            return;
        }
        grid[rowcoord][colcoord] = "W"
    }


    IsMovementBlocker(contents) {
        if (contents == "W")
            return true;
        return false;
    }
}
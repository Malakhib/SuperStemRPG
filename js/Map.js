const map = document.querySelector('#map')

let grid = []



export function refreshGrid(){
    for(let i = 0; i < 5; i ++){
        grid[i] = []
        for(let j = 0; j < 10; j++){
            grid[i].push('_')
        }
    }
}
refreshGrid();


export function CreateMap() {
    // const grid = [["1", "2","3"], ["4","5","6"]];
    for (let i = 0; i < grid.length; i++) {
        let rowText = ""
        
        for (let j = 0; j < grid[i].length; j++) {
            rowText += grid[i][j] + " ";
        }
        let row = document.createElement("div");
        row.classList.add("mapRow");
        row.innerHTML = rowText;
        map.appendChild(row);
    }
}

export function placeCharacter(){
    let rowcoord = Math.floor(Math.random() * 5)
    let colcoord = Math.floor(Math.random() * 10)
    console.log(rowcoord, colcoord)
    grid[rowcoord][colcoord] = "C"
}
export class Player{
    /**
    * character array will be legs, toroso, head
    */
    player = {character: ['H', 'O', '*'], health, x, y};
    /**
     * @param character the ascii you want to use as your character 
     */
    SetCharacter(character){
        player.character = character;
    };

    GetCharacter(){
        return player;
    };

    PutCharacterOnMap(character, map){
        for(let i = 0; i < character.character.length; i++){
            map[character.x][character.y + i] = character.character[i];
        }
        return map;
    }

    constructor(map) {
        this.map = map;
        this.health = 10;
        this.PlaceCharacter()
    }

    PlaceCharacter() {
        let rowcoord = Math.floor(Math.random() * 5)
        let colcoord = Math.floor(Math.random() * 10)
        this.map.grid[rowcoord][colcoord] = "C"
        this.characterX = colcoord;
        this.characterY = rowcoord;
    }

    MoveCharacter(direction) {
        if (!CanCharacterMoveInDir(direction)) {
            return;
        }
        if (direction == "up") {
            if (characterY != 0) {
               this.map.grid[characterY][characterX] = "_";
                characterY--;
               this.map.grid[characterY][characterX] = "C";
            }
        } else if (direction == "down") {
            if (characterY !=this.map.grid.length - 1) {
               this.map.grid[characterY][characterX] = "_";
                characterY++;
               this.map.grid[characterY][characterX] = "C";
            }
        } else if (direction == "left") {
            if (characterX != 0) {
               this.map.grid[characterY][characterX] = "_";
                characterX--;
               this.map.grid[characterY][characterX] = "C";
            }
        } else if (direction == "right") {
            if (characterX !=this.map.grid[characterY].length - 1) {
               this.map.grid[characterY][characterX] = "_";
                characterX++;
               this.map.grid[characterY][characterX] = "C";
            }
        }
        RefreshMap();
    }

    Fight() {
        //Fights an adjacent character
    }

    IsMonsterNearby() {
        //returns if a monster is nearby
    }

    CanCharacterMoveInDir(direction) {
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


    
    MoveCharacterRandom() {
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
}
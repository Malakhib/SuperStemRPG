import { Enemies } from "./Enemies";
import { MapCreator } from "./MapCreator";
import { Player } from "./Player";

export class GameState{
    enemiesInstance = new Enemies;
    playerInstance = new Player;
    GameState(){
        this.gamestate = {};
    }
    gamestate = {
        /**
         * The currrent position of the player
         */
        player: {
            character,
            health,
            x,
            y 
        },
        /**
         * The current game map instance
         */
        map,
        /**
         * list of current enemies and their positions on the map
         */
        enemies
    }

    SaveGame(gamestate){
        //Add an put request(?)
    }

    LoadGame(){
        //Add an get request(?)
    }

    CreateNewGame(){
        //Setup Map
        this.enemiesInstance.SetEnemy({character: ['S'], health: 5, x: 1, y: 5});
        var map = CreateMap();
        var character = this.playerInstance.GetCharacter();
        character.x = map.length / 2;
        character.y = 1;
        character.health = 20;
        const enemies = this.enemiesInstance.GetEnemies();
        gamestate.enemies = enemies;
        gamestate.player = character;
        gamestate.map = map;
        return gamestate;
        //Movement
    }
}
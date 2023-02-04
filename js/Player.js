export class Player{
    /**
    * character array will be legs, toroso, head
    */
    player = {character: ['H', 'O', '*'], x, y};
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
}





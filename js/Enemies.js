export class Enemies{

    Enemies(){
        enemies = [];
    }

    enemy = {
        character,
        x,
        y
    };

    enemies;

    SetEnemy(character, x, y){
        enemies.push({character, x, y});
    }

    GetEnemies(){
        return enemies;
    }  
}

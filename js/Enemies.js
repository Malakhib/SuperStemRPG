export class Enemies{

    Enemies(){
        enemies = [];
    }

    enemy = {
        character,
        health,
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

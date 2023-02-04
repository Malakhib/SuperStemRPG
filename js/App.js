import {grid, ResetGrid, CreatemapAccess, PlaceCharacter, PlaceWall,MoveCharacterRandom} from "./map.js";

ResetGrid();
PlaceCharacter();
PlaceWall();
PlaceWall();
PlaceWall();
PlaceWall();
PlaceWall();
PlaceWall();
PlaceWall();
PlaceWall();
CreatemapAccess();
setInterval(MoveCharacterRandom, 500)

export function RunPlayerCode() {

}
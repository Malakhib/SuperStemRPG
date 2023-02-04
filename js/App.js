import {grid, ResetGrid, RefreshMap, PlaceCharacter, PlaceWall, MoveCharacterRandom} from "./map.js";

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
RefreshMap();
setInterval(MoveCharacterRandom, 500)

export function RunPlayerCode() {

}
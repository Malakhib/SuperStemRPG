import {grid, ResetGrid, CreateMap, PlaceCharacter, PlaceWall,MoveCharacterRandom} from "./map.js";

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
CreateMap();
setInterval(MoveCharacterRandom, 500)

export function RunPlayerCode() {

}
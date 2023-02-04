import {grid, ResetGrid, RenderMap, PlaceCharacter, PlaceWall,MoveCharacterRandom} from "./map.js";
import { CreateMap, MapSetup } from "./MapCreator.js";
import { GetCharacter, SetCharacter } from "Player.js";
import { PutCharacterOnMap } from "./Player.js";

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
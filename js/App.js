import {grid, ResetGrid, CreateMap, PlaceCharacter,MoveCharacterRandom} from "./map.js";

ResetGrid();
PlaceCharacter();
CreateMap();
setInterval(MoveCharacterRandom, 500)
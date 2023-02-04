import { RunPlayerCode } from "./App.js";
import { CanCharacterMoveInDir, Fight, IsMonsterNearby, MoveCharacter } from "./Map.js";
var specialChars = ['(', ')', '{', '}', ';']
document.getElementById("RunCode").addEventListener("click", RunCode)
var codeField = document.getElementById("playerCode");
export class CharacterProgram {
    characterProgram = {program: code, commandPosition}; 

    constructor(player) {
        this.code = "";
        this.commandPosition = 0;
        this.player = player;
    }

    RunCode() {
        commandPosition = 0;
        code = FormatCode(codeField.value);
    }

    FormatCode(newcode) {
        return newcode.replace(/ /g, "").replace(/\n/g, "").toLowerCase();
    }

    GetPlayerCommand() {
        let commandString = code.substring(commandPosition, GetCommandLength(commandPosition));
        commandPosition += commandString.length;
        MoveCommandPositionToNextString();
        if (commandString == "if") {
            return GetPlayerConditional();
        } else if (commandString == "move") {
            player.MoveCharacter(this.GetPlayerArgument());
            return "move";
        } else if (commandString == "fight") {
            player.Fight();
            return "fight";
        }

        return commandString;

    }

    GetPlayerConditional() {
        let commandString = code.substring(commandPosition, commandPosition + GetCommandLength(commandPosition));
        commandPosition += commandString.length;
        MoveCommandPositionToNextString();
        if (commandString == "canmove") {
            if (player.CanCharacterMoveInDir(GetPlayerArgument())) {
                return true;
            }
        } else if (commandString == "hasenemy") {
            return player.IsMonsterNearby();
        }
        return false;
    }

    GetPlayerArgument() {
        let commandString = code.substring(commandPosition, commandPosition + GetCommandLength(commandPosition));
        commandPosition += commandString.length;
        return commandString;
    }

    MoveCommandPositionToNextString() {
        while (specialChars.includes(code.charAt(commandPosition))) {
            commandPosition++;
        }
    }

    GetCommandLength() {
        let length = code.length - 1 - commandPosition;
        for (let i = 0; i < specialChars.length; i++) {
            if (code.indexOf(specialChars[i], commandPosition) != -1) {
                length = Math.min(length, code.indexOf(specialChars[i], commandPosition) - commandPosition);
            }
        }
        return length;
    }
}
import { RunPlayerCode } from "./App.js";
import { CanCharacterMoveInDir, IsMonsterNearby } from "./Map.js";

document.getElementById("RunCode").addEventListener("click", RunCode);

const codeField = document.getElementById("playerCode");
const specialChars = ['(', ')', '{', '}', ';']
let code = "";
let commandPosition = 0;

function RunCode() {
    commandPosition = 0;
    code = FormatCode(codeField.value);
    RunPlayerCode();
}

function FormatCode(newcode) {
    return newcode.replace(/ /g, "").replace(/\n/g, "").toLowerCase();
}

export function GetPlayerCommand() {
    let commandString = code.substring(commandPosition, GetCommandLength(commandPosition));
    commandPosition += commandString.length;
    MoveCommandPositionToNextString();
    if (commandString == "if") {
        return GetPlayerConditional();
    }

    return commandString;

}

export function GetPlayerConditional() {
    let commandString = code.substring(commandPosition, commandPosition + GetCommandLength(commandPosition));
    commandPosition += commandString.length;
    MoveCommandPositionToNextString();
    if (commandString == "canmove") {
        if (CanCharacterMoveInDir(GetPlayerArgument())) {
            return true;
        }
    } else if (commandString == "IsMonsterNearby") {
        return IsMonsterNearby();
    }
    return false;
}

export function GetPlayerArgument() {
    let commandString = code.substring(commandPosition, commandPosition + GetCommandLength(commandPosition));
    commandPosition += commandString.length;
    return commandString;
}

function MoveCommandPositionToNextString() {
    while (specialChars.includes(code.charAt(commandPosition))) {
        commandPosition++;
    }
}

function GetCommandLength() {
    let length = code.length - 1 - commandPosition;
    for (let i = 0; i < specialChars.length; i++) {
        if (code.indexOf(specialChars[i], commandPosition) != -1) {
            length = Math.min(length, code.indexOf(specialChars[i], commandPosition) - commandPosition);
        }
    }

    return length;
}
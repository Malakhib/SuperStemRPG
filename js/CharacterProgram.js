import {RunPlayerCode} from "./App.js";

document.getElementById("RunCode").addEventListener("click", RunCode);

const codeField = document.getElementById("playerCode");
let code = "";

function RunCode() {
    code = FormatCode(codeField.value);
    alert(code);
    RunPlayerCode();
}

function FormatCode(newcode) {
    return newcode.replace(/ /g, "").replace(/\n/g, "");
}
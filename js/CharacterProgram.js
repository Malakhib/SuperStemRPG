import {RunPlayerCode} from "./App.js";

document.getElementById("RunCode").addEventListener("click", RunCode);

const code = document.getElementById("playerCode");
function RunCode() {
    RunPlayerCode();
}
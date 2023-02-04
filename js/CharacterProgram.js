import {RunPlayerCode} from "./App.js";

document.getElementById("RunCode").setAttribute("onclick","RunCode()");

const code = document.getElementById("playerCode");
function RunCode() {
    RunPlayerCode();
}
"use strict"

window.onload = function() {
    const fTempBtn = document.getElementById("fTempBtn");
    fTempBtn.onclick = fTempBtnClicked;
}

function fTempBtnClicked(){
    const fTempField = document.getElementById("fTemp");
    let fTemp = Number(fTempField.value);

    let result = (fTemp - 32)*(5/9);

    const resultField = document.getElementById("result");
    resultField.value = result;
}
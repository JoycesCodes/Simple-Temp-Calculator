"use strict"

window.onload = function() {
    const fTempBtn = document.getElementById("fTempBtn");
    fTempBtn.onclick = fTempBtnClicked;
    const resetBtn = document.getElementById("reset")
    resetBtn.onclick = resetBtnClicked;
}

function fTempBtnClicked(){
    const fTempField = document.getElementById("fTemp");
    let fTemp = Number(fTempField.value);

    let result = (fTemp - 32)*(5/9);

    const resultField = document.getElementById("result");
    resultField.value = result;
}

function resetBtnClicked(){
    const fTempField = document.getElementById("fTemp");
    fTempField.value = null;
    result.value = null;
}
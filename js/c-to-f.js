"use strict"

window.onload = function() {
    const cTempBtn = document.getElementById("cTempBtn");
    cTempBtn.onclick = cTempBtnClicked;
    const resetBtn = document.getElementById("reset")
    resetBtn.onclick = resetBtnClicked;
}

function cTempBtnClicked(){
    const cTempField = document.getElementById("cTemp");
    let cTemp = Number(cTempField.value);

    let result = (cTemp*(9/5))+32;

    const resultField = document.getElementById("result");
    resultField.value = result;
}

function resetBtnClicked(){
    const cTempField = document.getElementById("cTemp");
    cTempField.value = null;
    result.value = null;
}
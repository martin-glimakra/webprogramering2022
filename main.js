const fruitBtn = document.getElementById("fruit-btn")
const vegetablesBtn = document.getElementById("vegetables-btn")
const nutsBtn = document.getElementById("nuts-btn")
const moreInformation = document.getElementById("more-information")

const fruitInfo = document.getElementById("fruit-info")
const vegetablesInfo = document.getElementById("vegetables-info")
const nutsInfo = document.getElementById("nuts-info")

fruitBtn.addEventListener("click", fruitFunction);
vegetablesBtn.addEventListener("click", vegetablesFuncion);
nutsBtn.addEventListener("click", nutsFunction);


function fruitFunction() {
    console.log('fruitFunction')
    console.log(moreInformation)
    moreInformation.style.display = "block"
    fruitInfo.style.display = "block"
    vegetablesInfo.style.display = "none"
    nutsInfo.style.display = "none"
}

function vegetablesFuncion() {
    console.log('vegetablesFuncion')
    moreInformation.style.display = "block"
    fruitInfo.style.display = "none"
    vegetablesInfo.style.display = "block"
    nutsInfo.style.display = "none"
}

function nutsFunction() {
    console.log('nutsFunction')
    moreInformation.style.display = "block"
    fruitInfo.style.display = "none"
    vegetablesInfo.style.display = "none"
    nutsInfo.style.display = "block"
}
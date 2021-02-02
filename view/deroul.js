const butDeroulEnergy = document.getElementById("deroulEnergy")
const butDeroulProductivity = document.getElementById("deroulProductivity")
const butDeroulCreativity = document.getElementById("deroulCreativity")
const butDeroulBackend = document.getElementById("deroulBackend")

const energyBox = document.getElementById("energyBox")
const productivityBox = document.getElementById("productivityBox")
const creativityBox = document.getElementById("creativityBox")
const backendBox = document.getElementById("backendBox")

function moveDeroul(boolean, idBox,idIcon) {
    if (boolean == false) {
        idBox.style.display = "block"
        idIcon.classList.remove("fa-caret-left")
        idIcon.classList.add("fa-caret-down")
        setTimeout(() => {
            idBox.style.height = "100px"
            idBox.style.opacity = "100%"
        }, 1);
    } else if (boolean == true) {
        idIcon.classList.remove("fa-caret-down")
        idIcon.classList.add("fa-caret-left")
        idBox.style.height = "0px"
        idBox.style.opacity = "0%"
        idBox.style.display = "none"
    }
}
bolBoxEnergy = true
bolBoxProductivity = true
bolBoxCreativity = true
bolBoxBackend = true
moveDeroul(bolBoxEnergy, energyBox, butDeroulEnergy)
moveDeroul(bolBoxProductivity, productivityBox,butDeroulProductivity)
moveDeroul(bolBoxCreativity, creativityBox,butDeroulCreativity)
moveDeroul(bolBoxBackend, backendBox,butDeroulBackend)

document.body.addEventListener("click", function (e) {
    if (e.target == butDeroulEnergy) {
        if (bolBoxEnergy == false) {
            bolBoxEnergy = true
        } else {
            bolBoxEnergy = false
        }
        moveDeroul(bolBoxEnergy, energyBox, butDeroulEnergy)
    }
    if (e.target == butDeroulProductivity) {
        if (bolBoxProductivity == false) {
            bolBoxProductivity = true
        } else {
            bolBoxProductivity = false
        }
        moveDeroul(bolBoxProductivity, productivityBox,butDeroulProductivity)
    }
    if (e.target == butDeroulCreativity) {
        if (bolBoxCreativity == false) {
            bolBoxCreativity = true
        } else {
            bolBoxCreativity = false
        }
        moveDeroul(bolBoxCreativity, creativityBox,butDeroulCreativity)
    }
    if (e.target == butDeroulBackend) {
        if (bolBoxBackend == false) {
            bolBoxBackend = true
        } else {
            bolBoxBackend = false
        }
        moveDeroul(bolBoxBackend, backendBox,butDeroulBackend)
    }
})
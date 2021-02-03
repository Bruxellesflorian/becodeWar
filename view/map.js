const body = document.body
const map = document.getElementById("map")


for(let i = 0; i<30;i++){
    const ligne = document.createElement("div")
    ligne.classList.add("ligne")
    map.appendChild(ligne)
    for(let u = 0; u<30 ;u++){
        const tuile = document.createElement("div")
        tuile.classList.add("tuile")
        ligne.appendChild(tuile)
    }
}
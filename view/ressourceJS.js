
    //Pour la base de donnée
    //Donner à recup pour l'algo JS 
    //___________________table user_Ressource____________________________
    // bdd Energy       = energy,        lvlenergy ,         maxEnergy
    // bdd productivity = productivity,  lvlProductivity,    maxProductivity 
    // bdd creativity   = creativity,    lvlcreativity ,     maxcreativity
    // bdd backend      = backend,       lvlenergy ,         maxbackend
    //
    //___________________Table de user_techno____________________________
    // cafe         = false => (0 dans la table arrayMOD.achat)
    // italienne    = false => (0)
    // percolateur  = false => (0)

    // ecran        = false => (0)
    // ram          = false => (0)
    // IDE          = false => (0)

    // Figma        = false => (0)
    // Adobe        = false => (0)
    // CSS          = false => (0)

    // Node         = false => (0)
    // PHP          = false => (0)
    // Python       = false => (0)

    let energy = 0, lvlenergy = 1 , maxEnergy = 100;
    let productivity = 0,lvlProductivity =1 , maxProductivity = 100;
    let creativity = 0, lvlcreativity = 0, maxcreativity = 100;
    let backend = 0, lvlbackend = 0, maxbackend = 100;



    const statutEnergy = document.getElementById("statutEnergy")
    const barreProgress_Energy = document.getElementById("barreProgress_Energy")

    const statutProductivity = document.getElementById("statutProductivity")
    const barreProgress_Productivity = document.getElementById("barreProgress_Productivity")

    const statutCreativity = document.getElementById("statutCreativity")
    const barreProgress_Creativity = document.getElementById("barreProgress_Creativity")

    const statutBackend = document.getElementById("statutBackend")
    const barreProgress_Backend = document.getElementById("barreProgress_Backend")

    const ENAffichePS = document.getElementById("EN")
    const PRAffichePS = document.getElementById("PR")
    const CRAffichePS = document.getElementById("CR")
    const BEAffichePS = document.getElementById("BE")
    function ressPsecAffiche(x,y){
        x.innerHTML = y
    }

function lvlofressource(x){
    return 1 * x
}    
function energyPlus(plus){
    if(energy <= maxEnergy-1 ){
        return energy += plus
    } 
}
function productivityPlus(plus){
    if(productivity <= maxProductivity-1 ){
        return productivity += plus
    } 
}
function creativityPlus(plus){
    if(creativity <= maxcreativity-1 ){
        return creativity += plus
    } 
}
function backendPlus(plus){
    if(backend <= maxbackend-1 ){
        return backend += plus
    } 
}
function barreColorProgress(x,y){
    return (100 / x) * y
}
function barreEvolutionColor(){
    barreProgress_Energy.style.width = barreColorProgress(maxEnergy,energy) + "%"
    barreProgress_Productivity.style.width = barreColorProgress(maxProductivity,productivity) + "%"
    barreProgress_Creativity.style.width = barreColorProgress(maxcreativity,creativity) + "%"
    barreProgress_Backend.style.width = barreColorProgress(maxbackend,backend) + "%"
}
function max(x,y){
    if(x >= y){
        return x = y
    }
}
let intervalRessource = setInterval(function(){ 
    energyPlus(lvlofressource(lvlenergy)) 
    productivityPlus(lvlofressource(lvlProductivity))
    creativityPlus(lvlofressource(lvlcreativity))
    backendPlus(lvlofressource(lvlbackend))
    barreEvolutionColor()
    statutEnergy.textContent = energy + "/" + maxEnergy
    statutProductivity.textContent = productivity + "/" + maxProductivity
    statutCreativity.textContent = creativity + "/" + maxcreativity
    statutBackend.textContent = backend + "/" + maxbackend
    max(energy,maxEnergy)
    max(productivity,maxProductivity)
    max(creativity,maxcreativity)
    max(backend,maxbackend)
    ressPsecAffiche(ENAffichePS,lvlenergy)
    ressPsecAffiche(PRAffichePS,lvlProductivity)
    ressPsecAffiche(CRAffichePS,lvlcreativity)
    ressPsecAffiche(BEAffichePS,lvlbackend)
}, 100);

class ress {
    constructor(nrj, prod, crea, back,lvlnrj,lvlprod,lvlcrea,lvlback) {
      this.nrj = nrj;
      this.prod = prod;
      this.crea = crea;
      this.back = back;
      this.lvlnrj = lvlnrj;
      this.lvlprod = lvlprod;
      this.lvlcrea = lvlcrea;
      this.lvlback = lvlback;  
    }
  }
let buy_cafe = new ress(15,0,0,0,1,0,0,0)
let buy_cafetiere = new ress(60,30,0,0,1,0,0,0)
let buy_percolateur = new ress(300,200,0,0,1,0,0,0)
let buy_ecran = new ress(0,60,0,0,0,1,0,0)
let buy_ram = new ress(500,500,100,0,0,1,0,0)
let buy_IDE = new ress(1000,1000,500,500,0,1,0,0)
let buy_Figma = new ress(500,300,0,0,0,0,1,0)
let buy_Adobe = new ress(1000,500,500,0,0,0,1,0)
let buy_CSS = new ress(0,0,0,0,0,0,1,0)
let buy_node = new ress(0,0,0,0,0,0,0,1)
let buy_PHP = new ress(0,0,0,0,0,0,0,1)
let buy_Python = new ress(10,0,0,0,0,0,0,1)



// _________________________DEROULE MENU___________________

const butDeroulEnergy = document.getElementById("deroulEnergy")
const butDeroulProductivity = document.getElementById("deroulProductivity")
const butDeroulCreativity = document.getElementById("deroulCreativity")
const butDeroulBackend = document.getElementById("deroulBackend")

const energyBox = document.getElementById("energyBox")
const productivityBox = document.getElementById("productivityBox")
const creativityBox = document.getElementById("creativityBox")
const backendBox = document.getElementById("backendBox")

function moveDeroul(boolean, idBox, idIcon) {
    if (boolean == false) {
        idBox.style.display = "block"
        idIcon.classList.remove("fa-caret-left")
        idIcon.classList.add("fa-caret-down")
        setTimeout(() => {
            idBox.style.height = "200px"
        }, 1);
        setTimeout(() => {
            idBox.style.height = "fit-content"
            idBox.style.opacity = "100%"
        }, 300);
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
moveDeroul(bolBoxProductivity, productivityBox, butDeroulProductivity)
moveDeroul(bolBoxCreativity, creativityBox, butDeroulCreativity)
moveDeroul(bolBoxBackend, backendBox, butDeroulBackend)

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
        moveDeroul(bolBoxProductivity, productivityBox, butDeroulProductivity)
    }
    if (e.target == butDeroulCreativity) {
        if (bolBoxCreativity == false) {
            bolBoxCreativity = true
        } else {
            bolBoxCreativity = false
        }
        moveDeroul(bolBoxCreativity, creativityBox, butDeroulCreativity)
    }
    if (e.target == butDeroulBackend) {
        if (bolBoxBackend == false) {
            bolBoxBackend = true
        } else {
            bolBoxBackend = false
        }
        moveDeroul(bolBoxBackend, backendBox, butDeroulBackend)
    }
})
const cafe = document.getElementById("cafe")
const italienne = document.getElementById("italienne")
const percolateur = document.getElementById("percolateur")
const ecran = document.getElementById("ecran")
const ram = document.getElementById("ram")
const IDE = document.getElementById("IDE")
const Figma = document.getElementById("Figma")
const Adobe = document.getElementById("Adobe")
const CSS = document.getElementById("CSS")
const node = document.getElementById("node")
const PHP = document.getElementById("PHP")
const Python = document.getElementById("Python")

let arrayMOD = [{
    variable: cafe,
    content: "cafe",
    apFu: buy_cafe,
    achat: 0,
},
{
    variable: italienne,
    content: "italienne",
    apFu: buy_cafetiere,
    achat: 0,
    
},
{
    variable: percolateur,
    content: "percolateur",
    apFu: buy_percolateur,
    achat: 0,
    
},
{
    variable: ecran,
    content: "ecran",
    apFu: buy_ecran,
    achat: 0,
    
},
{
    variable: ram,
    content: "ram",
    apFu: buy_ram,
    achat: 0,
    
},
{
    variable: IDE,
    content: "IDE",
    apFu: buy_IDE,
    achat: 0,
},
{
    
    variable: Figma,
    content: "Figma",
    apFu: buy_Figma,
    achat: 0,
},
{ 
    variable: Adobe,
    content: "Adobe",
    apFu: buy_Adobe,
    achat: 0,
},
{
    variable: CSS,
    content: "CSS",
    apFu: buy_CSS,
    achat: 0,  
},
{
    variable: node,
    content: "node",
    apFu: buy_node,
    achat: 0,
},
{
    variable: PHP,
    content: "PHP",
    apFu: buy_PHP,
    achat: 0,
},
{
    variable: Python,
    content: "Python",
    apFu: buy_Python,
    achat: 0,
},
]


const bullAide = document.getElementById("bullAide")
document.body.addEventListener("mouseover", function (e) {
    for (let i = 0; i < arrayMOD.length; i++) {
        if (e.target == arrayMOD[i].variable) {
            bullAide.innerHTML =arrayMOD[i].content
        }
    }
})
                // _______________SECTION ACHAT_______________//

document.body.addEventListener("click", function (e) {
    for (let i = 0; i < arrayMOD.length; i++) {
        function buybuy(x,y){
            if(energy >= x.nrj && productivity >= x.prod && creativity >= x.crea && backend >= x.back && y == 0){
                energy -= x.nrj
                productivity -= x.prod
                creativity -= x.crea
                backend -= x.back
                lvlenergy += x.lvlnrj
                lvlProductivity += x.lvlprod
                lvlcreativity += x.lvlcrea
                lvlbackend += x.lvlback  
                arrayMOD[i].achat++
            }
        }
        if (e.target == arrayMOD[i].variable) {
                    buybuy(arrayMOD[i].apFu,arrayMOD[i].achat)
                    anulatorBuy()
        }
    }
})
function anulatorBuy(){
    for(let i=0; i<arrayMOD.length;i++){
        if(arrayMOD[i].achat == 1){
            document.querySelector("#"+arrayMOD[i].content).style.display ="none"
            delete arrayMOD[i].apFu.nrj;
            delete arrayMOD[i].apFu.prod;
            delete arrayMOD[i].apFu.crea;
            delete arrayMOD[i].apFu.back;
            console.log(arrayMOD[i].content,arrayMOD[i].achat);
        }
    }   
}
anulatorBuy()









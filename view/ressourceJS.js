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

let energy = 0,
    lvlenergy = 1,
    maxEnergy = 100;
let productivity = 0,
    lvlProductivity = 1,
    maxProductivity = 100;
let creativity = 0,
    lvlcreativity = 0,
    maxcreativity = 100;
let backend = 0,
    lvlbackend = 0,
    maxbackend = 100;


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

function ressPsecAffiche(x, y) {
    x.innerHTML = y
}

function lvlofressource(x) {
    return 1 * x
}

function energyPlus(plus) {
    if (energy <= maxEnergy - 1) {
        return energy += plus
    }
}

function productivityPlus(plus) {
    if (productivity <= maxProductivity - 1) {
        return productivity += plus
    }
}

function creativityPlus(plus) {
    if (creativity <= maxcreativity - 1) {
        return creativity += plus
    }
}

function backendPlus(plus) {
    if (backend <= maxbackend - 1) {
        return backend += plus
    }
}

function barreColorProgress(x, y) {
    return (100 / x) * y
}

function barreEvolutionColor() {
    barreProgress_Energy.style.width = barreColorProgress(maxEnergy, energy) + "%"
    barreProgress_Productivity.style.width = barreColorProgress(maxProductivity, productivity) + "%"
    barreProgress_Creativity.style.width = barreColorProgress(maxcreativity, creativity) + "%"
    barreProgress_Backend.style.width = barreColorProgress(maxbackend, backend) + "%"
}

function max(x, y) {
    if (x >= y) {
        return x = y
    }
}
let intervalRessource = setInterval(function () {
    energyPlus(lvlofressource(lvlenergy))
    productivityPlus(lvlofressource(lvlProductivity))
    creativityPlus(lvlofressource(lvlcreativity))
    backendPlus(lvlofressource(lvlbackend))
    barreEvolutionColor()
    statutEnergy.textContent = energy + "/" + maxEnergy
    statutProductivity.textContent = productivity + "/" + maxProductivity
    statutCreativity.textContent = creativity + "/" + maxcreativity
    statutBackend.textContent = backend + "/" + maxbackend
    max(energy, maxEnergy)
    max(productivity, maxProductivity)
    max(creativity, maxcreativity)
    max(backend, maxbackend)
    ressPsecAffiche(ENAffichePS, lvlenergy)
    ressPsecAffiche(PRAffichePS, lvlProductivity)
    ressPsecAffiche(CRAffichePS, lvlcreativity)
    ressPsecAffiche(BEAffichePS, lvlbackend)
}, 100);

class ress {
    constructor(nrj, prod, crea, back, lvlnrj, lvlprod, lvlcrea, lvlback) {
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
let buy_cafe = new ress(15, 0, 0, 0, 1, 0, 0, 0)
let buy_cafetiere = new ress(60, 30, 0, 0, 1, 0, 0, 0)
let buy_percolateur = new ress(300, 200, 0, 0, 1, 0, 0, 0)
let buy_ecran = new ress(0, 60, 0, 0, 0, 1, 0, 0)
let buy_ram = new ress(500, 500, 100, 0, 0, 1, 0, 0)
let buy_IDE = new ress(1000, 1000, 500, 500, 0, 1, 0, 0)
let buy_Figma = new ress(500, 300, 0, 0, 0, 0, 1, 0)
let buy_Adobe = new ress(1000, 500, 500, 0, 0, 0, 1, 0)
let buy_CSS = new ress(0, 0, 0, 0, 0, 0, 1, 0)
let buy_node = new ress(0, 0, 0, 0, 0, 0, 0, 1)
let buy_PHP = new ress(0, 0, 0, 0, 0, 0, 0, 1)
let buy_Python = new ress(10, 0, 0, 0, 0, 0, 0, 1)

class stock {
    constructor(nrj, prod, crea, back, StockNrj, stockProd, StockCrea, stockBack) {
        this.nrj = nrj;
        this.prod = prod;
        this.crea = crea;
        this.back = back;
        this.StockNrj = StockNrj;
        this.stockProd = stockProd;
        this.StockCrea = StockCrea;
        this.stockBack = stockBack;
    }
}

let buy_gauffre = new stock (100,100,0,0,500,0,0,0)
let buy_cookies = new stock (100,100,0,0,500,0,0,0)
let buy_raclette = new stock (100,100,0,0,500,0,0,0)

let buy_usbkey = new stock (100,100,0,0,500,0,0,0)
let buy_cloud = new stock (100,100,0,0,500,0,0,0)
let buy_disqueDurExterne = new stock (100,100,0,0,500,0,0,0)

let buy_pilluleBleu = new stock (100,100,0,0,500,0,0,0)
let buy_pillulerouge = new stock (100,100,0,0,500,0,0,0)
let buy_elonMusk = new stock (100,100,0,0,500,0,0,0)

let buy_skyblog = new stock (100,100,0,0,500,0,0,0)
let buy_github = new stock (100,100,0,0,500,0,0,0)
let buy_la_nasa = new stock (100,100,0,0,500,0,0,0)

// _________________________DEROULE MENU___________________

const butDeroulEnergy = document.getElementById("deroulEnergy")
const butDeroulProductivity = document.getElementById("deroulProductivity")
const butDeroulCreativity = document.getElementById("deroulCreativity")
const butDeroulBackend = document.getElementById("deroulBackend")
const butDeroulStockEN = document.getElementById("butDeroulStockEN")
const butDeroulStockPR = document.getElementById("butDeroulStockPR")
const butDeroulStockCR = document.getElementById("butDeroulStockCR")
const butDeroulStockBE = document.getElementById("butDeroulStockBE")

const energyBox = document.getElementById("energyBox")
const productivityBox = document.getElementById("productivityBox")
const creativityBox = document.getElementById("creativityBox")
const backendBox = document.getElementById("backendBox")
const StockENBox = document.getElementById("StockENBox")
const StockPRBox = document.getElementById("StockPRBox")
const StockCRBox = document.getElementById("StockCRBox")
const StockBEBox = document.getElementById("StockBEBox")




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
bolBoxStockEN = true
bolBoxStockPR = true
bolBoxStockCR = true
bolBoxStockBE = true


moveDeroul(bolBoxEnergy, energyBox, butDeroulEnergy)
moveDeroul(bolBoxProductivity, productivityBox, butDeroulProductivity)
moveDeroul(bolBoxCreativity, creativityBox, butDeroulCreativity)
moveDeroul(bolBoxBackend, backendBox, butDeroulBackend)
moveDeroul(bolBoxStockEN, StockENBox, butDeroulStockEN)
moveDeroul(bolBoxStockPR, StockPRBox, butDeroulStockPR)
moveDeroul(bolBoxStockCR, StockCRBox, butDeroulStockCR)
moveDeroul(bolBoxStockBE, StockBEBox, butDeroulStockBE)
const listDeroul = [{
    bouton: butDeroulEnergy,
    bol:  bolBoxEnergy,
    box: energyBox,
}, {
    bouton: butDeroulProductivity,
    bol: bolBoxProductivity,
    box: productivityBox,
}, {
    bouton: butDeroulCreativity,
    bol:bolBoxCreativity,
    box:creativityBox,
}, {
    bouton: butDeroulBackend,
    bol:bolBoxBackend,
    box:backendBox,
}, {
    bouton: butDeroulStockEN,
    bol:bolBoxStockEN,
    box:StockENBox,
}, {
    bouton: butDeroulStockPR,
    bol:bolBoxStockPR,
    box:StockPRBox,
}, {
    bouton: butDeroulStockCR,
    bol:bolBoxStockCR,
    box:StockCRBox,
}, {
    bouton: butDeroulStockBE,
    bol:bolBoxStockBE,
    box:StockBEBox,
}]

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

const gauffre = document.getElementById("gauffre")
const cookies = document.getElementById("cookies")
const raclette = document.getElementById("raclette")
const usbkey = document.getElementById("usbkey")
const cloud = document.getElementById("cloud")
const disqueDurExterne = document.getElementById("disqueDurExterne")
const pilluleBleu = document.getElementById("pilluleBleu")
const pillulerouge = document.getElementById("pillulerouge")
const elonMusk = document.getElementById("elonMusk")      
const skyblog = document.getElementById("skyblog")
const github = document.getElementById("github")
const la_nasa = document.getElementById("la_nasa")  





let arrayMOD = [{
        variable: cafe,
        content: "cafe",
        apFu: buy_cafe,
        achat: 0,
        // ce qui serait bien ca serait que si achat de cafe prenne 1, qu'il soit stocké dans la BDD et repris par une function de type "function update(){}"  pour qu'à l'ouverture de session du joueur il retrouve ses achats.  
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

                    //   LIST DE STOCK
                        //energy
let arraySTOCK = [ 
    {
        variable: gauffre,
        content: "gauffre",
        apFu: buy_gauffre,
        achat: 0,
    },
    {
        variable: cookies,
        content: "cookies",
        apFu: buy_cookies,
        achat: 0,
    },
    {
        variable: raclette,
        content: "raclette",
        apFu: buy_raclette,
        achat: 0,
    }

                    //productivity
,
    {
        variable: usbkey,
        content: "usbkey",
        apFu: buy_usbkey,
        achat: 0,
    },
    {
        variable: cloud,
        content: "cloud",
        apFu: buy_cloud,
        achat: 0,
    },
    {
        variable: disqueDurExterne,
        content: "disqueDurExterne",
        apFu: buy_disqueDurExterne,
        achat: 0,
    } 

                    // creativity  
,
    {
        variable: pilluleBleu,
        content: "pilluleBleu",
        apFu: buy_pilluleBleu,
        achat: 0,
    },
    {
        variable: pillulerouge,
        content: "pillulerouge",
        apFu: buy_pillulerouge,
        achat: 0,
    },
    {
        variable: elonMusk,
        content: "elonMusk",
        apFu: buy_elonMusk,
        achat: 0,
    }  

                        // Backend   
,
    {
        variable: skyblog,
        content: "skyblog",
        apFu: buy_skyblog,
        achat: 0,
    },
    {
        variable: github,
        content: "github",
        apFu: buy_github,
        achat: 0,
    },
    {
        variable: la_nasa,
        content: "la_nasa",
        apFu: buy_la_nasa,
        achat: 0,
    }     
]
const bullAide = document.getElementById("bullAide")
document.body.addEventListener("mouseover", function (e) {
    for (let i = 0; i < arrayMOD.length; i++) {
        if (e.target == arrayMOD[i].variable) {
            bullAide.innerHTML = arrayMOD[i].content
        }
    }
})

document.body.addEventListener("click", function (e) {
             //  deroule MENU
    for (let i = 0; i < listDeroul.length; i++) {
        if (e.target == listDeroul[i].bouton) {
            if (listDeroul[i].bol == false) {
                listDeroul[i].bol = true
            } else {
                listDeroul[i].bol = false
            }
            moveDeroul(listDeroul[i].bol, listDeroul[i].box, listDeroul[i].bouton)
        }
    }
              // Buy Market
    for (let i = 0; i < arrayMOD.length; i++) {
        function buybuy(x) {
            if (energy >= x.nrj && productivity >= x.prod && creativity >= x.crea && backend >= x.back && arrayMOD[i].achat == 0) {
                energy -= x.nrj
                productivity -= x.prod
                creativity -= x.crea
                backend -= x.back
                lvlenergy += x.lvlnrj
                lvlProductivity += x.lvlprod
                lvlcreativity += x.lvlcrea
                lvlbackend += x.lvlback
                //changement de la valeur achat de l'objet[i] dans ArrayMOD
                arrayMOD[i].achat++
            }
        }
        if (e.target == arrayMOD[i].variable) {
            buybuy(arrayMOD[i].apFu)
            anulatorBuy(arrayMOD[i].achat,arrayMOD[i].content,arrayMOD[i].apFu.nrj,arrayMOD[i].apFu.prod,arrayMOD[i].apFu.crea,arrayMOD[i].apFu.back)
        }
    }
    for (let i = 0; i < arraySTOCK.length; i++){
        function buybuyStock(x) {
            if (energy >= x.nrj && productivity >= x.prod && creativity >= x.crea && backend >= x.back && arraySTOCK[i].achat == 0) {
                energy -= x.nrj
                productivity -= x.prod
                creativity -= x.crea
                backend -= x.back
                maxEnergy += x.StockNrj
                maxProductivity += x.stockProd
                maxcreativity += x.StockCrea
                maxbackend += x.stockBack
                //changement de la valeur achat de l'objet[i] dans ArraySTOCK
                arraySTOCK[i].achat++
                //j'aurais voulu faire qu'une seule fonction buybuy mais le problème est que arraySTOCK[i].achat ne prend pas le changement de valeur en dehors de cette boucle, en tous cas je n'ai pas trouvé comment faire.
                //exemple :
                //Je remplace arraySTOCK[i].achat par x
                // function test(x){
                //    x++  
                // }
                // test(arraySTOCK[i].achat)
                //ca ne fonctionne pas
                //j'y reviendrais surement...
            }
        }
        if(e.target == arraySTOCK[i].variable){
            buybuyStock(arraySTOCK[i].apFu)
            anulatorBuy(arraySTOCK[i].achat,arraySTOCK[i].content,arraySTOCK[i].apFu.nrj,arraySTOCK[i].apFu.prod,arraySTOCK[i].apFu.crea,arraySTOCK[i].apFu.back)
        }
    }
})

function anulatorBuy(x,y,a,b,c,d) {
    //cette fonction permet d'enlever tout les buttons et les classes(technologies) qui on déjà été acheté par le joueur
    for (let i = 0; i < arrayMOD.length; i++) {
        if (x == 1) {
            document.querySelector("#" + y).style.display = "none"
            delete a;
            delete b;
            delete c;
            delete d;
            console.log(y, x);
        }
    }
}
for(let mep =0; mep<arrayMOD.length;mep++){
    anulatorBuy(arrayMOD[mep].achat,arrayMOD[mep].content,arrayMOD[mep].apFu.nrj,arrayMOD[mep].apFu.prod,arrayMOD[mep].apFu.crea,arrayMOD[mep].apFu.back)
    //cette boucle et cette fonction permettent d'enlever tout les buttons et les classes(technologies) qui on déjà été acheté par le joueur // QUAND IL OUVRE SA SESSION //
}
for(let mep =0; mep<arraySTOCK.length;mep++){
    anulatorBuy(arraySTOCK[mep].achat,arraySTOCK[mep].content,arraySTOCK[mep].apFu.nrj,arraySTOCK[mep].apFu.prod,arraySTOCK[mep].apFu.crea,arraySTOCK[mep].apFu.back)
    //cette boucle et cette fonction permettent d'enlever tout les buttons et les classes(technologies) qui on déjà été acheté par le joueur // QUAND IL OUVRE SA SESSION //
}

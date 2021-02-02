function barreColorProgress(x,y){
    return (100 / x) * y
}

    // energy RESOURCE
    let energy = 0, lvlenergy = 1 , maxEnergy = 100;

    function lvlofressource(){
        return 1 * lvlenergy
    }
    const statutEnergy = document.getElementById("statutEnergy")
    const barreProgress_Energy = document.getElementById("barreProgress_Energy")
    
function energyPlus(plus){
    if(energy <= maxEnergy-1 ){
        return energy += plus
    } 
}
function barreEvolutionEnergy(){
    barreProgress_Energy.style.width = barreColorProgress(maxEnergy,energy) + "%"
}
let intervalRessource = setInterval(function(){ 
    energyPlus(lvlofressource())
    barreEvolutionEnergy()
    statutEnergy.textContent = energy + "/" + maxEnergy
}, 1000);

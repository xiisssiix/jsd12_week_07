let cookies = 0;      
let clickPower = 1;   
let upgradeCost = 10; 

const cookieDisplay = document.getElementById("cookie-count");
const powerDisplay = document.getElementById("click-power");
const costDisplay = document.getElementById("upgrade-cost");
const cookieBtn = document.getElementById("cookie-btn");
const upgradeBtn = document.getElementById("upgrade-btn");

function updateDisplay() {
    cookieDisplay.innerText = cookies;
    powerDisplay.innerText = clickPower;
    costDisplay.innerText = upgradeCost;
    upgradeBtn.disabled = cookies < upgradeCost;
}

cookieBtn.addEventListener("click", () => {
    cookies += clickPower; 
    cookieBtn.classList.add("cookie-shake");
    setTimeout(() => {
        cookieBtn.classList.remove("cookie-shake");
    }, 200);
    updateDisplay();
});

upgradeBtn.addEventListener("click", () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;      
        clickPower += 1;            
        upgradeCost = Math.floor(upgradeCost * 1.5); 
        updateDisplay();    
    }
});

updateDisplay();
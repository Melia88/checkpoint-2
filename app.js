// This is the name of the starting count
let puppyLove = 1000;
let mod = 0;
let autoMod= 0;

// this is the dictionary 
let clickUpgrades = {
  ball: {
    price: 5,
    quantity: 0,
    multiplier: 1,
  },
  treat: {
    price: 8,
    quantity: 0,
    multiplier: 3,
  },
  walk: {
    price: 12,
    quantity: 0,
    multiplier: 5,
  }
};

let autoUpgrades = {
  food: {
    price: 200,
    quantity: 0,
    multiplier: 10,
  },
  water: {
    price: 250,
    quantity: 0,
    multiplier: 20,
  }
};


// This uses the onClick clickPuppy in HTML to increase the variable puppyLove by one on each click
function clickPuppy() {
  puppyLove += mod + 1
  console.log(puppyLove)
  draw()
}

// This makes my count on count/quantity increase show up on screen
function draw() {
  document.getElementById("pLoveCounter").innerText = puppyLove

  document.getElementById("ballCounter").innerText = ' Price: ' + clickUpgrades.ball.price + '  Quantity: ' + clickUpgrades.ball.quantity


  document.getElementById("treatCounter").innerText = ' Price: ' + clickUpgrades.treat.price + '  Quantity: ' + clickUpgrades.treat.quantity 


  document.getElementById("walkCounter").innerText = ' Price: ' + clickUpgrades.walk.price + '  Quantity ' + clickUpgrades.walk.quantity 

  document.getElementById("waterCounter").innerText = ' Price: ' + autoUpgrades.water.price + '  Quantity ' + autoUpgrades.water.quantity 

  document.getElementById("foodCounter").innerText = ' Price: ' + autoUpgrades.food.price + '  Quantity: ' + autoUpgrades.food.quantity 
}

// This keeps track of auto items

function autos(item){ debugger
  let autoItem = autoUpgrades[item] 
  if(puppyLove >= autoItem.price){
    autoItem.quantity += 1
    puppyLove -= autoItem.price
     autoItem.price = Math.floor(1.2* autoItem.price) 
     autoMod += autoItem.multiplier
  }
  draw()
}

function clicks(type){
  let clickItem = clickUpgrades[type]
  if(puppyLove >= clickItem.price){
    clickItem.quantity += 1
    puppyLove -= clickItem.price
    clickItem.price = Math.floor(1.2* clickItem.price) 
    mod *= clickItem.multiplier
  }
  draw()
}

function collectAutoUpgrades(){
 puppyLove += autoMod
    draw()
}


function startInterval() {
  setInterval(collectAutoUpgrades, 3000);
}

startInterval()
draw()





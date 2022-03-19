// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let dollars = 550;
let cups = 9;
let water = 400;
let milk = 540;
let beans = 120;
let sugar = 200;
let addSugar;

let loop = true;

function displayInfo() {
    console.log("");
    console.log("The coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${beans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${dollars} of money`);
    console.log("");
}

function espresso() {
    let espressoWater = 250;
    let espressoBeans = 16;
    let espressoPrice = 4;

    if(cups < 0) console.log("Sorry, not enough coffee cups!\n");
    else if(espressoWater > water) console.log("Sorry, not enough water!\n");
    else if(espressoBeans > beans) console.log("Sorry, not enough coffee beans!\n");
    else {
        cups--;
        water -= espressoWater;
        beans -= espressoBeans;
        dollars += espressoPrice;
        //console.log("");
        console.log("I have enough resources, making you a coffee!\n");
    }
    addingSugar();

}

function latte() {
    let latteWater = 350;
    let latteMilk = 75;
    let latteBeans = 20;
    let lattePrice = 7;

    if(cups < 0) console.log("Sorry, not enough coffee cups!\n");
    else if(latteWater > water) console.log("Sorry, not enough water!\n");
    else if(latteMilk > milk) console.log("Sorry, not enough milk!\n");
    else if(latteBeans > beans) console.log("Sorry, not enough coffee beans!\n");
    else {
        cups--;
        milk -= latteMilk;
        water -= latteWater;
        beans -= latteBeans;
        dollars += lattePrice;
        //console.log("");
        console.log("I have enough resources, making you a coffee!\n");
    }
    addingSugar();
}

function cappuccino() {
    let cappWater = 200;
    let cappMilk = 100;
    let cappBeans = 12;
    let cappPrice = 6;

    if(cups < 0) console.log("Sorry, not enough coffee cups!\n");
    else if(cappWater > water) console.log("Sorry, not enough water!\n");
    else if(cappMilk > milk) console.log("Sorry, not enough milk!\n");
    else if(cappBeans > beans) console.log("Sorry, not enough coffee beans!\n");
    else {
        cups--;
        milk -= cappMilk;
        water -= cappWater;
        beans -= cappBeans;
        dollars += cappPrice;
        console.log("I have enough resources, making you a coffee!\n");
    }
    addingSugar();
}

function addingSugar() {

    if (addSugar == 0) console.log("No sugar added.")
    else if (addSugar > 0) {
        if (addSugar > sugar) console.log(`Lak of sugar can only add ${sugar} qubes of sugar.`);
        else {
            sugar -= addSugar;
            console.log(`Added ${addSugar} sugar qubes to your cofee.\n`);
        }
    }
}

function buyCofee() {
    console.log("");
    let typeCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    addSugar = Number(input("How much sugar do you want to add? Type 0 up to 5.\n"));



    if (Number(typeCoffee) == 1) espresso();
    else if (Number(typeCoffee) == 2) latte();
    else if (Number(typeCoffee) == 3) cappuccino();
    else if (typeCoffee == "back")  return;
}

function fillSupplies() {
    console.log("");
    let waterSupplies = Number(input("Write how many ml of water you want to add:\n"));
    let milkSupplies = Number(input("Write how many ml of milk you want to add:\n"));
    let beansSupplies = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cupsSupplies = Number(input("Write how many disposable coffee cups you want to add:\n"));

    cups += cupsSupplies;
    water += waterSupplies;
    milk += milkSupplies;
    beans += beansSupplies;

    console.log("");
}

function takeMoney() {
    console.log("");
    console.log(`I gave you $${dollars}`);
    dollars = 0;
    console.log("")
}

function turnOff() {
    loop = false;
}

function askActions() {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");

    switch (action) {
        case "buy":
            buyCofee();
            break;
        case "fill":
            fillSupplies();
            break;
        case "take":
            takeMoney();
            break;
        case "remaining":
            displayInfo();
            break;
        case "exit":
            turnOff();
            break;
    }
}


while(loop === true) {
    askActions();
}


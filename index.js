// Function to get adjective
function getAdjective(choice) {
    if (choice === 1) return "Crazy";
    if (choice === 2) return "Amazing";
    if (choice === 3) return "Fire";
    return "Super";
}

// Function to get shop name
function getShop(choice) {
    if (choice === 1) return "Engine";
    if (choice === 2) return "Foods";
    if (choice === 3) return "Garments";
    return "Store";
}

// Function to get another word
function getOther(choice) {
    if (choice === 1) return "Bros";
    if (choice === 2) return "Limited";
    if (choice === 3) return "Hub";
    return "Group";
}

// Generate final business name
function generateName() {
    let adjChoice = Math.floor(Math.random() * 3) + 1;
    let shopChoice = Math.floor(Math.random() * 3) + 1;
    let otherChoice = Math.floor(Math.random() * 3) + 1;

    let adjective = getAdjective(adjChoice);
    let shop = getShop(shopChoice);
    let other = getOther(otherChoice);

    let name = adjective + " " + shop + " " + other;
    document.getElementById("result").innerText = name;
}

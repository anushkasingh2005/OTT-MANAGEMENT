function calculateNetflixCost() {
    const validity = document.getElementById("netflix-validity").value;
    const monthlyCost = 500; // Adjust the cost as needed
    const totalCost = validity * monthlyCost;
    document.getElementById("netflix-cost").textContent = `Total Cost: ₹${totalCost}`;
}

function calculateAmazonPrimeCost() {
    const validity = document.getElementById("amazon-prime-validity").value;
    const monthlyCost = 499; // Adjust the cost as needed
    const totalCost = validity * monthlyCost;
    document.getElementById("amazon-prime-cost").textContent = `Total Cost: ₹${totalCost}`;
}

function calculateHotstarCost() {
    const validity = document.getElementById("hotstar-validity").value;
    const monthlyCost = 299; // Adjust the cost as needed
    const totalCost = validity * monthlyCost;
    document.getElementById("hotstar-cost").textContent = `Total Cost: ₹${totalCost}`;
}

function calculateMXPlayerCost() {
    const validity = document.getElementById("mx-player-validity").value;
    const monthlyCost = 199; // Adjust the cost as needed
    const totalCost = validity * monthlyCost;
    document.getElementById("mx-player-cost").textContent = `Total Cost: ₹${totalCost}`;
}

function calculateSonyLIVCost() {
    const validity = document.getElementById("sony-liv-validity").value;
    const monthlyCost = 299; // Adjust the cost as needed
    const totalCost = validity * monthlyCost;
    document.getElementById("sony-liv-cost").textContent = `Total Cost: ₹${totalCost}`;
}
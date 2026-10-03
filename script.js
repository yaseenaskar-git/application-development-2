console.log("DontJustTrain JavaScript is working!");

const serviceOne = `Strength and Conditioning`;
let sandcPrice = 50;
const isAvailable = true;

const serviceTwo = `Nutrition Coaching and Planning`;
let priceText = "50";
let nutritionPrice = Number(priceText);

console.log(nutritionPrice);
console.log(typeof nutritionPrice);

console.log(typeof serviceOne);
console.log(typeof sandcPrice);
console.log(typeof isAvailable);

let selectedService = `Strength and Conditioning`; 
//set to strength and conditioning for testing
let finalPrice = 0;

if (selectedService === "Strength and Conditioning") {
    finalPrice = 50
    console.log(`Cart: `,selectedService, `Total Price: `,finalPrice)
} else if (selectedService === "Strength and Conditioning + Nutrition") {
    finalPrice = 85
    console.log(`Cart: `,selectedService, `Total Price: `,finalPrice)
}

let monthsNumber = 2; //set to 2 for testing
let totalPrice = 0;

function totalPriceCalc(finalPrice, monthsNumber) {
    
    let totalPrice = finalPrice * monthsNumber
    let result = totalPrice
    console.log(totalPrice)

    return result;
}

totalPriceCalc(50, 2)
totalPriceCalc(85, 3)

//Array

const services = [
    "Strength and Conditioning",
    "Nutrition Coaching and Planning",
    "Mental Performance"
];

console.log(services[0]);

//Array loop
for (let service of services) {
    console.log(service);
}

//Object
const service = {
    name: "Strength and Conditioning",
    price: 50,
    available: true
};

console.log(service.name);
console.log(service.price);

//Events and Document Object Model
const serviceOptions = document.querySelectorAll(".service-option");
const selectionMessage = document.querySelector("#selection-message");
const pricingSection = document.querySelector(".table-container");

// for verification 
//console.log(serviceOptions)
//console.log(selectionMessage)
//console.log(pricingSection)

serviceOptions.forEach(function(service) {

    service.addEventListener("click", function() {

        const serviceName = service.querySelector("td").textContent;
        const price = service.dataset.price;

        selectionMessage.textContent = `You selected ${serviceName} - $${price}/month`;

        if (service.classList.contains("selected")) {
            service.classList.remove("selected");
            selectionMessage.textContent = "Select a package to see more information.";
            
            const confirmation = document.querySelector("#confirmation-message");

            if (confirmation) {
                confirmation.remove();
            }
        } else {
            serviceOptions.forEach(function(item) {
                item.classList.remove("selected");
            });

            //const confirmation = document.createElement("p");

            //confirmation.textContent = "Package selected successfully!";
            //pricingSection.append(confirmation);

            let confirmation = document.querySelector("#confirmation-message");

            if (!confirmation) {
                confirmation = document.createElement("p");
                confirmation.id = "confirmation-message";
                pricingSection.append(confirmation);
            }

            confirmation.textContent = "Package selected successfully!";

            service.classList.add("selected");
            }
    });

});
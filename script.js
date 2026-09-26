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

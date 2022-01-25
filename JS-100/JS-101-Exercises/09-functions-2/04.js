//Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

let bmi = (height, weight) => {
  let result = weight / ( height / 100) ** 2;
  let stringResult = result.toString();
  let decimalIndex = stringResult.indexOf('.');
  if (decimalIndex !== -1){
    stringResult = stringResult.slice(0, decimalIndex+3);
  }
  return stringResult;
};

console.log(bmi(180,80));
let age = 31;

let ageStatements = (currentAge, delay) => console.log(`In ${delay} years, you will be ${currentAge + delay} years old.`);

console.log(`You are ${age} years old.`);

for(let i=10; i<=40; i+=10){
  ageStatements(age,i);
}
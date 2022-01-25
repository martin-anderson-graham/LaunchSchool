//Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

//true

//bonus: yes, || is after &&
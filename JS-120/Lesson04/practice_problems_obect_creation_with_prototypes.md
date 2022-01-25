1. Use a factory function to create pet objects. The factory should let us create and use pets like this:

    ```JavaScript
    let pudding = createPet("Cat", "Pudding");
    console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
    pudding.sleep(); // I am sleeping
    pudding.wake();  // I am awake

    let neptune = createPet("Fish", "Neptune");
    console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
    neptune.sleep(); // I am sleeping
    neptune.wake();  // I am awake
    ```

    Factory function
    ```JavaScript
    function createPet(animal, name) {
      return {
        name,
        animal,
        sleep() {
          console.log('I am sleeping');
        },
        wake() {
          console.log('I am awake');
        },
      };
    }
    ```

1. Use the OLOO pattern to create an object prototype that we can use to create pet objects. The prototype should let us create and use pets like this:

    ```JavaScript
    let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
    console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
    pudding.sleep(); // I am sleeping
    pudding.wake();  // I am awake

    let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
    console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
    neptune.sleep(); // I am sleeping
    neptune.wake();  // I am awake
    ```

    OLOO:
    ```JavaScript
    let PetPrototype = {
      init(animal, name) {
        this.animal = animal;
        this.name = name;
        return this;
      },
      sleep() {
        console.log('I am sleeping');
      },
      wake() {
        console.log('I am awake');
      },
    };
    ```
1. Consider the objects created by the programs in problems 1 and 2. How do objects for the same animal differ from each other?

    In problem 1 the `[[Prototype]]` of our pets is `Object.prototype`, rather than the factory function - in problem 2 `[[Prototype]]` is correctly set to the `PetProtype` objects.

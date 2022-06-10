let p = new Promise(function(resolve, reject) {
  setTimeout( () => {
    reject("Error - not LaunchSchool");
  }, 2000);
});

p.then().catch(error => console.log(error));
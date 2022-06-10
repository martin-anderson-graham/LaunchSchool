let p = new Promise( (resolve, reject)=> {
  setTimeout( resolve, 2000, "LaunchSchool");
})

p.then( result => console.log(result));
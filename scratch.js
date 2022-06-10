global.name = 'you'

let obj = {
  name:'ted',
  b() {
    return {
      th: () => console.log(this.name)
    }
  }
}

let obj2 = {name:'me'}


let func = obj.b();
let func2 = obj.b.call(global);

let newB = obj.b.bind(obj);
let func3 = newB();

let func4 = obj.b.call(obj2);

// func.th();
// func2.th();
func.th();
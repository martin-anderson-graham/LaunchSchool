function* fibSeqGen() {
  let first = 0;
  let second = 1;
  while(true) {
    yield second;
    [first, second] = [second, first + second]
  }

}

let fibSeq1 = fibSeqGen();

for(let i = 0; i < 10; i += 1) {
  console.log(fibSeq1.next());
}


let fibSeq2 = fibSeqGen();
for(let i = 0; i < 10; i += 1) {
  console.log(fibSeq2.next());
}

console.log(fibSeq1.next());
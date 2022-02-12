function delayLog() {
  for (var idx = 1; idx <= 10; idx += 1) {
    setTimeout( () => console.log(idx), idx * 1000);
  }
}

delayLog();

//changing let to var - since var is function scoped (to delaylog) there will
//only be one copy of it - only 10 will get logged? (but timing still correct)

//right on timing, but the += 1 does occur, so 11 is logged
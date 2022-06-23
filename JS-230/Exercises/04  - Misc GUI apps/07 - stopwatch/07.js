/* eslint-disable max-lines-per-function */


document.addEventListener('DOMContentLoaded', () => {
  let counting = false;
  let startTime;
  let intervalID;
  let hours = document.querySelector('.hours');
  let minutes = document.querySelector('.minutes');
  let seconds = document.querySelector('.seconds');
  let centiseconds = document.querySelector('.centiseconds');

  document.querySelector('#startstop').addEventListener('click', (event) => {
    event.preventDefault();
    if (!counting) {
      counting = true;
      startTime = new Date();
      intervalID = setInterval(updateTime, 10);
      event.target.textContent = 'Stop';
    } else {
      clearInterval(intervalID);
      event.target.textContent = 'Start';
      counting = false;
    }
  });

  document.querySelector('#reset').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector("#startstop").textContent = 'Start';
    if (counting) {
      counting = false;
      clearInterval(intervalID);
      intervalID = null;
      resetTimes();
    }
  });

  function resetTimes() {
    [hours, minutes, seconds, centiseconds].forEach( ele => {
      ele.textContent = '00';
    });
  }

  function updateTime() {
    let change = new Date() - startTime;
    let cs = String(((change / 10).toFixed(0) % 100));
    if (cs.length < 2) cs = '0' + cs;
    centiseconds.textContent = cs;

    let sec = String(((change / 1000).toFixed(0) % 60));
    if (sec.length < 2) sec = '0' + sec;
    seconds.textContent = sec;

    let min = String(((change / 60000).toFixed(0) % 60));
    if (min.length < 2) min = '0' + min;
    minutes.textContent = min;

    let hour = String(((change / 3600000).toFixed(0) % 100));
    if (hour.length < 2) hour = '0' + hour;
    hours.textContent = hour;


  }

});
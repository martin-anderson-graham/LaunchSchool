

function retrieveAllSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', '/api/schedules');

  request.responseType = 'json';
  request.timeout = 5000;

  request.addEventListener('load', (event) => {
    let res = event.target;
    let scheduleArr = res.response;

    if(scheduleArr.every(ele => ele.student_email)) {
      alert('No schedules are available for booking')
    } else {
      let teachers = {};
      scheduleArr.forEach( sch => {
        teachers[sch.staff_id] = teachers[sch.staff_id] + 1 || 1;
      });

      
      let alertString = Object.keys(teachers).map( key => {
        return `staff ${key} - ${teachers[key]}`
      }).join('\n');

      alert(alertString);
    }
  })

  request.addEventListener('timeout', () => {
    alert('Your request timed out, please try again')
  });

  request.addEventListener('loadend', () => {
    alert("Thanks for asking, please come again")
  })

  request.send();
}

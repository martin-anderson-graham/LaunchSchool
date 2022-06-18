function getStaffId(name) {
  return staffObj.filter( staff => staff.name === name)[0].id;
}

function makeSchedule(staffNames) {
  let div = document.createElement('div');
  div.setAttribute('id', `schedule${scheduleCounter}`);
  div.classList.add('schedule')
  
  let nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', `name${scheduleCounter}`);
  nameLabel.textContent = 'Staff Name:';
  div.appendChild(nameLabel);

  let nameDropdown = document.createElement('select');
  nameDropdown.setAttribute('id', `name${scheduleCounter}`);
  nameDropdown.setAttribute('name', `name${scheduleCounter}`);
  div.appendChild(nameDropdown);


  staffNames.forEach( name => {
    let opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;

    nameDropdown.appendChild(opt);
  })


  let dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', `date${scheduleCounter}`);
  dateLabel.textContent = 'Date:';
  div.appendChild(dateLabel);

  let dateInput = document.createElement('input');
  dateInput.setAttribute('id', `date${scheduleCounter}`);
  dateInput.setAttribute('placeholder', 'mm-dd-yy');
  div.appendChild(dateInput);

  let timeLabel = document.createElement('label');
  timeLabel.setAttribute('for', `time${scheduleCounter}`);
  timeLabel.textContent = 'Time:';
  div.appendChild(timeLabel);

  let timeInput = document.createElement('input');
  timeInput.setAttribute('id', `time${scheduleCounter}`);
  timeInput.setAttribute('placeholder', 'hh:mm')
  div.appendChild(timeInput);

  let form = document.getElementById('schedules-form');
  let submitButton = document.getElementById('submit-all');
  form.insertBefore(div, submitButton);

  scheduleCounter += 1;
  return div;
}

function parseSchedules(scheduleDivs) {
  return scheduleDivs.map( scheduleDiv => {
    let childArr = scheduleDiv.children;
    return {
      "staff_id": getStaffId(childArr[1].value),
      "date": childArr[3].value,
      "time": childArr[5].value,
    }

  });
}

let scheduleCounter = 0;
let staffObj = [];

document.addEventListener("DOMContentLoaded", () => {
  let schedules = [];
  let staffNames = [];
  let staffReq = new XMLHttpRequest();
    
  staffReq.open('GET', 'http://localhost:3000/api/staff_members');
  staffReq.responseType = 'json';
  
  staffReq.addEventListener('load', (event) => {
      let staff = event.target.response;
      staffObj = staff.map(staff => { 
        return {'name': staff.name,
                'id': staff.id} 
      });
      staffNames = staff.map(staff => staff.name);
      schedules.push(makeSchedule(staffNames));
      document.getElementById('add-schedule').addEventListener('click', () => {
        schedules.push(makeSchedule(staffNames));
      });
    });
  
    staffReq.send();


  let form = document.getElementById('schedules-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = JSON.stringify({"schedules": parseSchedules(schedules)});

    let postReq = new XMLHttpRequest();
    postReq.open('POST', 'http://localhost:3000/api/schedules');
    postReq.setRequestHeader('Content-Type','application/json; charset=utf-8');

    postReq.addEventListener('load', (event) => {
      let xhr = event.target;

      if(xhr.status === 201) {
        alert("Schedules added");
      } else if(xhr.status === 400) {
        console.log(xhr.response);
        alert("Invalid input");
      }

      form.reset();
    });

    postReq.addEventListener('error', (event) => {
      alert("Something went wrong");
      form.reset();
    })


    postReq.send(data);
  });
});
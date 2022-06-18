document.addEventListener('DOMContentLoaded', () => {
  let staff = [];
  // array of schedule objects {scheduleString and id}
  let scheduleObjArr = []

  function getStaffNameFromID(id) {
    return staff.filter(staff => staff.id === id)[0].name;
  }

  function getScheduleIdFromScheduleString(string) {
    return scheduleObjArr.filter(sch => sch.scheduleString === string)[0].id;
  }

  function showStudentForm(seq, email, sch_id) {
    document.getElementById('booking-new-student').hidden = false;
    document.getElementById('new_email').value = email;
    document.getElementById('booking_sequence').value = seq;
    document.getElementById('schedule_id').value = sch_id;
  }

  function resetAllForms() {
    let div = document.getElementById('booking-new-student');
    div.hidden = true;
    document.getElementById('booking-form').reset();
    document.getElementById('new-student-form').reset();
  }

  function populateScheduleDropdown() {
    let select = document.getElementById('schedule');
    scheduleObjArr.forEach(sch => {
      let opt = document.createElement('option');
      opt.value = 'schedule';
      opt.textContent = sch.scheduleString;
      select.appendChild(opt);
    });
  }

  let staffReq = new XMLHttpRequest();
  staffReq.open('GET', 'http://localhost:3000/api/staff_members');

  staffReq.addEventListener('load', (event) => {
    let staffReqXHR = event.target;
    staff = JSON.parse(staffReqXHR.response);

    let scheduleReq = new XMLHttpRequest();
    scheduleReq.open('GET', 'http://localhost:3000/api/schedules');
    scheduleReq.addEventListener('load', (event) => {
      let xhr = event.target;
      let json = JSON.parse(xhr.response);
      scheduleObjArr = json
        .filter(schedule => !schedule.student_email)
        .map(schedule => {
          return {
            id: schedule.id,
            scheduleString: `${getStaffNameFromID(schedule.staff_id)} | ${schedule.date} | ${schedule.time}`
          }
        });

      populateScheduleDropdown();
    });
    scheduleReq.send();


  });

  staffReq.send();

  let bookingForm = document.getElementById('booking-form');
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let select = document.getElementById('schedule');
    let data = {
      id: getScheduleIdFromScheduleString(select.options[select.selectedIndex].text),
      student_email: document.getElementById('email').value,
    }
    let json = JSON.stringify(data);

    let req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:3000/api/bookings');
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    req.addEventListener('load', (event) => {
      let xhr = event.target;
      if (xhr.status === 204) {
        alert('Successfully booked the student');
        bookingForm.reset();
      } else if (xhr.status === 404) {
        alert(xhr.response);
        if (xhr.response.match('booking_sequence')) {
          let seq = xhr.response.match(/\d+/)[0];
          showStudentForm(seq, data.student_email, data.id);

          let newForm = document.getElementById('new-student-form');
          newForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let studentData = {
              email: document.getElementById('new_email').value,
              name: document.getElementById('name').value,
              booking_sequence: document.getElementById('booking_sequence').value,
            }
            
            let newStudentReq = new XMLHttpRequest();
            let json = JSON.stringify(studentData);
            newStudentReq.open("POST", 'http://localhost:3000/api/students')
            newStudentReq.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            newStudentReq.addEventListener('load', (event) => {
              let xhr = event.target;
              if(xhr.status === 201) {

                let bookingReq = new XMLHttpRequest();
                bookingReq.open('POST', 'http://localhost:3000/api/bookings');
                bookingReq.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                let bookingData = {
                  id: document.getElementById('schedule_id').value,
                  student_email: document.getElementById('new_email').value,
                }

                let json = JSON.stringify(bookingData);

                bookingReq.addEventListener('load', (event) => {
                  let bookingXHR = event.target;
                  alert(`${xhr.response} and booked`);
                  location.reload();
                })
                
                bookingReq.send(json);


              }
            });

            newStudentReq.send(json);
          })
        }

      }
    });

    req.send(json);
  })




});
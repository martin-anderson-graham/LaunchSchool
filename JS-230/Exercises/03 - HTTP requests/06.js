document.addEventListener('DOMContentLoaded', async () => {

  let bookingDatesResponse = await fetch('http://localhost:3000/api/bookings');
  let bookingDates = await bookingDatesResponse.json();

  let ul = document.getElementById('booking-dates');

  for (let i = 0; i < bookingDates.length; i += 1) {
    let date = bookingDates[i];
    console.log(date)
    let a = document.createElement('a');
    let li = document.createElement('li');
    li.textContent = date;
    a.appendChild(li);
    ul.appendChild(a);

    let bookingResponse = await fetch(`http://localhost:3000/api/bookings/${date}`);
    let bookings = await bookingResponse.json();

    let div = document.createElement('div');
    div.hidden = true;
    let nestedUL = document.createElement('ul');

    bookings.forEach( book => {
      let newLi = document.createElement('li');
      newLi.textContent = book.join(' | ');
      nestedUL.appendChild(newLi);
    })

    div.appendChild(nestedUL);
    li.appendChild(div);
  }


  ul.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    let nestedDiv = target.querySelector('div');
    if(!nestedDiv) return;
    if(nestedDiv.hidden) {
      nestedDiv.hidden = null;
    } else {
      nestedDiv.hidden = true;
    }
    
  })



});


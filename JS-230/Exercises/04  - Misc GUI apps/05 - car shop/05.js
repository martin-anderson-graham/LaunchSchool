/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const cars = [
  {
    make: 'Honda',
    model: 'Accord',
    year: `2005`,
    price: '7000',
    image: 'images/honda-accord-2005.jpg',
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: `2008`,
    price: '11000',
    image: 'images/honda-accord-2008.jpg',
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: `2009`,
    price: '12500',
    image: 'images/toyota-camry-2009.jpg',
  },
  {
    make: 'Toyota',
    model: 'Corrolla',
    year: `2016`,
    price: '15000',
    image: 'images/toyota-corrolla-2016.jpg',
  },
  {
    make: 'Suzuki',
    model: 'Swift',
    year: `2014`,
    price: '6000',
    image: 'images/suzuki-swift-2014.jpg',
  },
  {
    make: 'Audi',
    model: 'A4',
    year: `2013`,
    price: '25000',
    image: 'images/audi-a4-2013.jpg',
  },
  {
    make: 'Audi',
    model: 'A4',
    year: `2013`,
    price: '26000',
    image: 'images/audi-a4-2013.jpg',
  }
];

function populateFormFields() {
  function addOptionToSelect(selectName, optionText) {
    let select = document.querySelector(`select[name=${selectName}]`);
    if (!select) return;
    let opt = document.createElement('option');
    opt.textContent = optionText;
    select.appendChild(opt);
  }

  let filterOption = {};

  cars.forEach(car => {
    Object.entries(car).forEach(([key, value]) => {
      if (!filterOption[key]) {
        filterOption[key] = [value];
      } else if (!filterOption[key].includes(value)) {
        filterOption[key].push(value);
      }
    });
  });

  Object.entries(filterOption).forEach(([key, value]) => {
    value.sort().forEach(val => addOptionToSelect(key, val));
  });
}

function populateCarGrid() {
  let container = document.getElementById('cars');
  cars.forEach(car => {
    let div = document.createElement('div');
    div.classList.add('car');

    div.dataset['make'] = car.make;
    div.dataset['model'] = car.model;
    div.dataset['price'] = car.price;
    div.dataset['year'] = car.year;

    let carPic = document.createElement('img');
    carPic.src = car.image;

    let para1 = document.createElement('p');
    para1.textContent = `${car.make} ${car.model}`;
    para1.style.fontWeight = 'bold';

    let para2 = document.createElement('p');
    para2.textContent = `Year: ${car.year}`;

    let para3 = document.createElement('p');
    para3.textContent = `Price: ${car.price}`;

    div.appendChild(carPic);
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    container.appendChild(div);
  });

}

function filterCars(filterObj) {
  let carDivs = document.querySelectorAll('.car');
  Array.from(carDivs).forEach(div => {
    div.style.display = null;
  });

  Object.entries(filterObj).forEach ( ([key, value]) => {
    if (value === 'Any') return;
    Array.from(carDivs).forEach( car => {
      if (car.dataset[key] !== value) {
        car.style.display = 'none';
      }
    });
  });

}

document.addEventListener('DOMContentLoaded', () => {
  populateFormFields();
  populateCarGrid();

  let form = document.getElementById('filter');


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let filter = {};
    let data = new FormData(form);
    for (let [key, val] of data.entries()) {
      filter[key] = val;
    }

    filterCars(filter);
  });

  form.addEventListener('reset', () => {
    filterCars({});
  });

});
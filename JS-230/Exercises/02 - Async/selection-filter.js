let animalClassifications = {
  Vertebrate: [`Bear`, `Turtle`, `Whale`, `Salmon`, `Ostrich`],
  'Warm-blooded': [`Bear`, `Whale`, `Ostrich`],
  'Cold-blooded': [`Salmon`, `Turtle`],
  Mammal: [`Bear`, `Whale`],
  Bird: ['Ostrich']
}

let animals = {
  Bear :['Vertebrate', 'Warm-blooded', 'Mammal'],
  Turtle: ['Vertebrate', 'Cold-blooded'],
  Whale: [	'Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon: [	'Vertebrate', 'Cold-blooded'],
  Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird']
}


document.addEventListener('DOMContentLoaded', () => {
  
  let classificationSelect = document.querySelector('#animal-classifications');
  let animalSelect = document.querySelector('#animals');
  
  function hideOptionsNotInArray(ele, lib, choice) {
    console.log(lib[choice])

    let first = true;
    
    Array.prototype.slice.call(ele.children).forEach( opt => {
      opt.removeAttribute('selected');
      if(lib[choice].includes(opt.getAttribute('value'))) {
        if(first) {
          first = false;
          opt.setAttribute('selected', true);
        }
        opt.hidden = false;
      } else {
        opt.hidden = true;
      }
    });

    
  }

  document.querySelector('#selection-filters')
    .addEventListener('change', (event) => {
      console.log(event);
        if(event.target === animalSelect) {
          hideOptionsNotInArray(classificationSelect, animals, animalSelect.value);
        } else if (event.target === classificationSelect) {
          hideOptionsNotInArray(animalSelect, animalClassifications, classificationSelect.value);
        }
    });

});
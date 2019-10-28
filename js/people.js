import { displayPopup } from './popups.js';

// Variables for people form
let people = [];
let btnAddPerson = document.querySelector('.people__btn');
let inputPerson = document.querySelector('.people__input');

// Clear people list
document.querySelector('.people__card .people__btn').addEventListener('click', function(){
    document.querySelector('.people__list').innerHTML = '';
    people = [];
    updatePeopleCount();
})

// Validate new person
btnAddPerson.addEventListener('click', function(el){
    el.preventDefault();
    if(inputPerson.value === '' || inputPerson.value.length >= 18){
        return displayPopup('Check if field is empty or if it has more than 17 characters');
    }
    else if(people.includes(inputPerson.value)){
        return displayPopup('You have already added this person');
    }
    else{
        people.unshift(inputPerson.value);
        inputPerson.value = '';
        displayPeopleList();
        updatePeopleCount();
    }
})

function displayPeopleList() {
    // Insert each person on the website
    document.querySelector('.people__list').innerHTML = people.map(person => {
        return (`
            <p class="people__person" fullName='${person}'>
                ${person}
                <img class='people__deleteBtn' src="./gallery/deleteBtn.svg" alt="deleteBtn">
            </p>
        `)
    }).join('');

    // Update event listener for btnsDel
    btnsDelAddEventListener();
}

function btnsDelAddEventListener(){
    let btnsDelPerson = document.querySelectorAll('.people__deleteBtn');
    btnsDelPerson.forEach(btn => {
        btn.addEventListener('click', delPerson);
    });
}

function delPerson(){
    people = people.filter((person) => {
        return person !== this.parentNode.getAttribute('fullName');
    });
    this.parentNode.style.display = 'none';
    updatePeopleCount();
}

function updatePeopleCount(){
    document.querySelector('.people__count').textContent = people.length;
}

export { people }
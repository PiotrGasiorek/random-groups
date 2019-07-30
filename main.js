import { smoothScroll } from './smoothScroll.js';



// Variables for people form
let people = [];
let btnAddPerson = document.querySelector('.people__btn');
let inputPerson = document.querySelector('.people__input');

// Clear people list
document.querySelector('.people__btn').addEventListener('click', function(){
    document.querySelector('.people__list').innerHTML = '';
})
// Validate new person
btnAddPerson.addEventListener('click', function(el){
    el.preventDefault();
    if(inputPerson.value === '' || inputPerson.value.length >= 18){
        return alert('Check if field is empty or if it has more than 17 characters');
    }
    else if(people.includes(inputPerson.value)){
        return alert('You have already added this person');
    }
    people.unshift(inputPerson.value);
    inputPerson.value = '';
    updatePeopleList();
})

function updatePeopleList() {
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
    updateBtnDelPerson();
}

function updateBtnDelPerson(){
    let btnDelPerson = document.querySelectorAll('.people__deleteBtn');
    btnDelPerson.forEach(btn => {
        btn.addEventListener('click', delPerson);
    })
}

function delPerson(){
    people = people.filter((person) => {
        return person !== this.parentNode.getAttribute('fullName');
    });
    this.parentNode.style.display = 'none';
}



// Range slider functionality 
let slider = document.querySelector('#slider');
let sliderOutput = document.querySelector('.groups__label--output');

sliderOutput.innerHTML = Math.floor(slider.value / 10);

slider.oninput = function () {
    sliderOutput.innerHTML = Math.floor(this.value / 10);
}

slider.addEventListener('mousemove', function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(23, 107, 239)' + x + '%, rgb(124, 124, 124)' + x + '%)';
    slider.style.background = color;
})


let groups = [];

document.querySelector('.groups__btn').addEventListener('click', function(el){
    el.preventDefault();
    if(parseInt(sliderOutput.innerHTML) > people.length){
        alert('You can not have more groups than people');
        return false;
    }
    createRandomGroups(sliderOutput.textContent);
});

function createRandomGroups(groupsNumber) {
    groups = [];
    let peopleCopy = people;
    let averageGroupCount = Math.floor(peopleCopy.length/ groupsNumber);
    for(let i = 0; i < groupsNumber; i++){
        groups.push([]);
        while(groups[i].length !== averageGroupCount){
            let randomPerson = Math.floor(Math.random() * peopleCopy.length);
            groups[i].unshift(peopleCopy[randomPerson]);
            peopleCopy = peopleCopy.filter(function(el){
                return el != peopleCopy[randomPerson];
            });
        }
    }
    while(peopleCopy.length !== 0){
        groups[Math.floor(Math.random() * groupsNumber)].unshift(peopleCopy.shift());
    }
    console.log(JSON.stringify(groups));
}
// Smooth scroll
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition + 1;
    var startTime = null;
    
    function animation(currentTime){
        console.log(currentTime);
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
	
    requestAnimationFrame(animation);
}

// Call to action smooth scroll
document.querySelector('.header__btn').addEventListener('click', function(){
    smoothScroll('main', 1000);
});

// People list
let people = [];


let btnAddPerson = document.querySelector('.people__btn');
let inputPerson = document.querySelector('.people__input');

// Clear people list
document.querySelector('.people__clearBtn').addEventListener('click', function(){
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

    // Update event listener
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
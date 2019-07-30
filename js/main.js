import { smoothScroll } from './smoothScroll.js';
import { sliderListener, sliderOutput } from './slider.js';
import { people } from './people.js';


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
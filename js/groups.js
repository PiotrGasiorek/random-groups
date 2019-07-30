import { sliderOutput } from './slider.js';
import { people } from './people.js';

let groups = [];

document.querySelector('.groups__btn').addEventListener('click', function(el){
    el.preventDefault();
    if(parseInt(sliderOutput.innerHTML) > people.length){
        return alert('You can not have more groups than people');
    }
    createRandomGroups(sliderOutput.textContent);
});

function createRandomGroups(numberOfGroups) {
    groups = [];
    let copyOfPeople = people;
    let averageGroupCount = Math.floor(copyOfPeople.length/ numberOfGroups);
    for(let i = 0; i < numberOfGroups; i++){
        groups.push([]);
        while(groups[i].length !== averageGroupCount){
            let randomPerson = Math.floor(Math.random() * copyOfPeople.length);
            groups[i].unshift(copyOfPeople[randomPerson]);
            copyOfPeople = copyOfPeople.filter(function(el){
                return el != copyOfPeople[randomPerson];
            });
        }
    }
    while(copyOfPeople.length !== 0){
        groups[Math.floor(Math.random() * numberOfGroups)].unshift(copyOfPeople.shift());
    }

    groups = JSON.stringify(groups);
    console.log(groups);
} 

export { groups }
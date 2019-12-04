import { sliderOutput } from './slider.js';
import { updateDropdowns } from './dropdown.js';
import { people } from './people.js';
import { displayPopup } from './popups.js';


let groups = [];
let listOfGroups = document.querySelector('.groups__list');
let copyToClipboard;

document.querySelector('.groups__btn').addEventListener('click', function(el){
    el.preventDefault();
    if(parseInt(sliderOutput.innerHTML) > people.length){
        return displayPopup('You can not have more groups than people');
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

    displayGroups();
    updateDropdowns();

} 


function displayGroups(){
    let groupsOutput = ``;
    copyToClipboard = ``;
    for(let i = 0; i < groups.length; i++){
        groupsOutput += `
            <button class='groups__dropdown text--primary'>
                Group ${i + 1}
                <img class='groups__expandIcon' src="./gallery/expandBtn--pink.svg" alt="expandBtn">
            </button>
            <ul class='groups__group list'>
        `;

        copyToClipboard += `Group ${i + 1} \n`;

        groups[i].forEach(person => {
            groupsOutput += `<li class='groups__person'>${person}</li>`;
            copyToClipboard += `-${person} \n`;
        });

        groupsOutput += `</ul>`;
    };

    listOfGroups.innerHTML = groupsOutput;
    enableCopingGroupsToClipboard();
}

function enableCopingGroupsToClipboard(){
    console.log(copyToClipboard);
    document.querySelector('.copyBtn').setAttribute('data-clipboard-text', copyToClipboard);
}

export { groups }
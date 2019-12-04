function updateDropdowns(){
    let dropdowns = document.querySelectorAll('.groups__dropdown');
    dropdowns.forEach(button => {
        button.addEventListener('click', function(){
            this.classList.toggle('active');
            let listOfPeople = this.nextElementSibling;
            
            toggleActiveStyles(this);
            toggleDropdown(listOfPeople);

        })

        button.addEventListener('mouseover', function(){
            if(!this.classList.contains('active')){
                this.lastElementChild.src = './gallery/expandBtn--white.svg';
            }
        })
        button.addEventListener('mouseout', function(){
            if(!this.classList.contains('active')){
                this.lastElementChild.src = './gallery/expandBtn--pink.svg';
            }
        })
    });
}

function toggleActiveStyles(button){
    if(button.classList.contains('active')){
        button.lastElementChild.src = './gallery/expandBtn--white.svg';
        button.lastElementChild.style.transform = 'rotate(180deg)';
    }
    else{
        button.lastElementChild.src = './gallery/expandBtn--pink.svg';
        button.lastElementChild.style.transform = 'rotate(0deg)';
        
        const mouseoverEvent = new Event('mouseover');
        button.dispatchEvent(mouseoverEvent);
    }
}

function toggleDropdown(dropdown){
    if(dropdown.style.maxHeight){
        dropdown.style.maxHeight = null;
    }

    else{
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    }
}

export { updateDropdowns }
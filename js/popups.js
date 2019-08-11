let wrapper = document.querySelector('.wrapper');

function displayPopup(message){
    wrapper.style.display = 'block';
    document.querySelector('.popup__message').innerHTML = message;

    document.querySelector('.popup__btn').onclick = function() {
        wrapper.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == wrapper) {
          wrapper.style.display = "none";
        }
      }
}




export { displayPopup };
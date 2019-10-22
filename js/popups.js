const wrapper = document.querySelector('.wrapper');
function popupToggle(toggle){
  if(toggle == 'on'){
    // Activate popup
    wrapper.style.display = 'block';
    // Disactivate input
    document.querySelector('.people__input').blur();
  }
  else{
    // Disactivate popup
    wrapper.style.display = 'none';
    // Activate input
    document.querySelector('.people__input').focus();
  }
}
function displayPopup(message){
    popupToggle('on');
    document.querySelector('.popup__message').innerHTML = message;
    // Turn popup off when...
    document.querySelector('.popup__btn').onclick = () => popupToggle('off');
    document.onkeydown = () => popupToggle('off');
    window.onclick = (event) => event.target == wrapper ? popupToggle('off') : false;
}

export { displayPopup };
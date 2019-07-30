// Range slider functionality 
let slider = document.querySelector('#slider');
let sliderOutput = document.querySelector('.groups__label--output');

sliderOutput.innerHTML = Math.floor(slider.value / 10);

slider.oninput = function () {
    sliderOutput.innerHTML = Math.floor(this.value / 10);
}

let sliderListener = slider.addEventListener('mousemove', function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(23, 107, 239)' + x + '%, rgb(124, 124, 124)' + x + '%)';
    slider.style.background = color;
});

export { sliderListener, sliderOutput }
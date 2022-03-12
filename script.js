const slider = document.querySelector('#price-input');
const priceDisplay = document.querySelector('.dynamicPrice');
const switcher = document.querySelector('#check');
const trailButton = document.querySelector(".trial")
const mode = document.querySelector('.mode');
const discount = document.querySelector('.discount');
const invalOne = document.querySelector('#data');
const invalTwo = document.querySelector("#email");


// by default
switcher.checked = false;
let flag = false;
slider.value = 16;


switcher.addEventListener('change', (e) => {
    if (e.target.checked) {
        flag = true;
        mode.innerText = '/Year';
        let valueOne = ((+slider.value) - ((+slider.value) * 0.25)).toFixed(2)
        priceDisplay.innerText = `$ ${valueOne}`;
    }
    else {
        let valueTwo = (+slider.value).toFixed(2)
        priceDisplay.innerText = `$ ${valueTwo}`;
        flag = false;
        mode.innerText = '/month';
    }
})

slider.addEventListener('input', () => {
    
if ((+slider.value) < 14) {
    invalOne.src = 'images/xmark-solid.svg'
    invalTwo.src = 'images/xmark-solid.svg'
}
else if((+slider.value) < 20) {
    invalOne.src = "images/icon-check.svg";
    invalTwo.src = "images/xmark-solid.svg";
    }
else {
    invalTwo.src = "images/icon-check.svg";
    }
    
    let value = (+slider.value).toFixed(2);
    let yearlyValue = value - (value * 0.25);
    if (flag == true) {
        priceDisplay.innerText = `$ ${yearlyValue.toFixed(2)}`
    }
    else {
        priceDisplay.innerText = `$ ${value}`
    }
    if (slider.value == 0) {
        trailButton.setAttribute.disabled = true;
        trailButton.classList.add('disabled');
    }
    else {
        trailButton.classList.remove('disabled')
    }
})


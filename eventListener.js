
function addTitle() {
    // Page Title
    const h1 = document.createElement('h1');
    h1.classList.add('title');
    const h1_title = document.createTextNode('Playing With Color');
    h1.appendChild(h1_title);
    document.body.appendChild(h1);
}

function addButton() {

    // button1 color toggle
    const button = document.createElement('button');
    const button_title = document.createTextNode('Button 1');
    button.appendChild(button_title);
    button.addEventListener('click', function() {
        // const changeBackground = document.querySelector('body');
        // document.body.setAttribute('class', 'bgColor')
        // changeBackground.style.background = 'lightblue';
        document.body.classList.toggle('bgColor')
    })

    // button2 random color button
    const button2 = document.createElement('button');
    const button2_title = document.createTextNode('Button 2');
    button2.appendChild(button2_title);
    button2.addEventListener('click', function () {
        const r = Math.round((Math.random() * 255) + 1)
        const g = Math.round((Math.random() * 255) + 1)
        const b = Math.round((Math.random() * 255) + 1)
        document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    })
    // button
    document.body.appendChild(button);
    document.body.appendChild(button2)
    document.body.appendChild(document.createElement('br'));
}


function addSlider() {

    // red slider
    const divRed = document.createElement('div');
    divRed.setAttribute('class', 'red sliderbox');
    const slider1 = document.createElement('input');
    slider1.setAttribute('type', 'range');
    slider1.setAttribute('name', 'redSlider');
    slider1.setAttribute('min', '0');
    slider1.setAttribute('max', '255');

    // green slider
    const divGreen = document.createElement('div');
    divGreen.setAttribute('class', 'green sliderbox');
    const slider2 = document.createElement('input');
    slider2.setAttribute('type', 'range');
    slider2.setAttribute('type', 'range');
    slider2.setAttribute('name', 'greenSlider');
    slider2.setAttribute('min', '0');
    slider2.setAttribute('max', '255');


    // blue slider
    const divBlue = document.createElement('div');
    divBlue.setAttribute('class', 'blue sliderbox');
    const slider3 = document.createElement('input');
    slider3.setAttribute('type', 'range');
    slider3.setAttribute('type', 'range');
    slider3.setAttribute('name', 'blueSlider');
    slider3.setAttribute('min', '0');
    slider3.setAttribute('max', '255');

    slider1.addEventListener('input', function () {
        const r = slider1.value;
        const g = slider2.value;
        const b = slider3.value;
        document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    })

    slider2.addEventListener('input', function () {
        const r = slider1.value;
        const g = slider2.value;
        const b = slider3.value;
        document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    })

    slider3.addEventListener('input', function () {
        const r = slider1.value;
        const g = slider2.value;
        const b = slider3.value;
        document.body.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    })

    // slider
    document.body.appendChild(divRed);
    document.body.appendChild(slider1);
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(divGreen);
    document.body.appendChild(slider2);
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(divBlue);
    document.body.appendChild(slider3);

}



addTitle();
addButton();
addSlider();

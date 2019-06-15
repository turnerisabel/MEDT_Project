let urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get('name');

let selectedColor = 'silver';
let carOptions = [];
let selectedDrive = 'Four-wheel-drive';
let selectedWheel = 'wheel1';

for (let i = 0; i < cars.length; i++) {
    if (name === cars[i].name) {
        setDisplayImage(cars[i].image);
    }
}

function setColor(color) {
    let selectedColorBoxes = document.getElementsByClassName('selected-color');

    selectedColor = color;

    // löscht die selected-color Klasse von allen Elementen
    for (let i = 0; i < selectedColorBoxes.length; i++) {
        selectedColorBoxes[i].className = 'colorBox';
    }

    // fügt die selected-color Klasse zum Element hinzu
    document.getElementById(color).className = "colorBox selected-color";
}

function setDisplayImage(src) {
    let displayImage = document.getElementById("displayImage");
    if (displayImage != null) {
        displayImage.src = src;
    }
}

function createCar() {
    let dataDiv = document.getElementById('data');
    let configurator = document.getElementById('configurator');
    let optionsList = `<ul>`;

    for (let i = 0; i < carOptions.length; i++) {
        optionsList += `<li>` + carOptions[i] + `</li>`
    }

    optionsList += `</ul>`;

    configurator.innerHTML = "";

    dataDiv.innerHTML = `
       <div style="margin-left: 40%">
       <h2>The car was created successfully</h3>
       <table cellpadding="12">
           <tr>
               <th>Color:</th>
               <td style="vertical-align: middle">
                    <div id="` + selectedColor + `" class="colorBox"></div>
               </td>
           </tr>
           <tr>
               <th>Options:</th>
               <td>
                    ` + optionsList + `
               </td>
           </tr>
           <tr>
               <th>Drive:</th>
               <td>` + selectedDrive + `</td>
           </tr>
           <tr>
               <th>Wheel:</th>
               <td>` + selectedWheel + `</td>
           </tr>
       </table>
       </div>
   `;
}

function toggleCheckboxData(checkbox) {
    let index = carOptions.indexOf(checkbox.value);

    if (index == -1) {
        carOptions.push(checkbox.value);
    } else {
        carOptions.splice(index, 1);
    }
}

function setDrive(cb) {
    selectedDrive = cb.value;
}

function setWheel(wheelId) {
    let selectedWheelImages = document.getElementsByClassName('selected-wheel');

    selectedWheel = wheelId;

    // löscht die selected-color Klasse von allen Elementen
    for (let i = 0; i < selectedWheelImages.length; i++) {
        selectedWheelImages[i].className = 'wheel';
    }

    // fügt die selected-color Klasse zum Element hinzu
    document.getElementById(wheelId).className = "wheel selected-wheel";
}

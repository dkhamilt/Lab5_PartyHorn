// main.js

const btn = document.getElementById('honk-btn');
const air = document.getElementById('radio-air-horn');
const car = document.getElementById('radio-car-horn');
const party = document.getElementById('radio-party-horn');
const sound = document.getElementById('horn-sound');
const slider = document.getElementById('volume-slider');
const number = document.getElementById('volume-number');
const levelImage = document.getElementById('volume-image');
const soundImage = document.getElementById('sound-image');

var volume=100;

number.addEventListener("input", changeNumber);
slider.addEventListener("input", changeSlider);
btn.addEventListener("click", playSound);
air.addEventListener("click", updateAir);
car.addEventListener("click", updateCar);
party.addEventListener("click", updateParty);



function changeNumber(){
    volume = number.value;
    slider.value = volume;
    updateVolumeIcon();
}

function changeSlider(){
    volume=slider.value;
    number.value=volume;
    updateVolumeIcon();
}

function updateVolumeIcon(){
    if (volume == 0){
        levelImage.src = 'assets/media/icons/volume-level-0.svg';
        btn.disabled =true ;
    }
    else if (volume <= 33){
        levelImage.src = 'assets/media/icons/volume-level-1.svg';
        btn.disabled=false;
    }
    else if (volume <=66){
        levelImage.src = 'assets/media/icons/volume-level-2.svg';
        btn.disabled=false;
    }
    else{
        levelImage.src = 'assets/media/icons/volume-level-3.svg';
        btn.disabled=false;
    }
}

function playSound(){
  event.preventDefault();
  sound.volume = volume/100;
  sound.play();
}

function updateAir(){
    soundImage.src = 'assets/media/images/air-horn.svg';
    sound.src = "assets/media/audio/air-horn.mp3";
}
function updateCar(){
    soundImage.src = 'assets/media/images/car.svg';
    sound.src = "assets/media/audio/car-horn.mp3";
}
function updateParty(){
    soundImage.src = 'assets/media/images/party-horn.svg';
    sound.src = "assets/media/audio/party-horn.mp3";
}

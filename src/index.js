import Slider from "./slider.js";

const slider = new Slider('slider', {
    before: '../assets/before.jpg',
    after: '../assets/after.jpg',
});

const dropAreaBefore = document.getElementById('input-before__frame'); // for drag and drop
const inputBefore = document.getElementById('input-before'); // button
const dropAreaAfter = document.getElementById('input-after__frame'); // for drag and drop
const inputAfter = document.getElementById('input-after'); // button

// что бы браузер не открывал картинку, нужно добавить это к событиям drag
function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
    }

window.addEventListener('dragover', preventDefaults, false);
window.addEventListener('drop', preventDefaults, false);

// BEFORE ----------
// Handle button
inputBefore.onchange = () => {
    const selectedFile = inputBefore.files[0];
    
    if (selectedFile) {
        let url = URL.createObjectURL(selectedFile);
        slider.setBefore(url);
    }
}
// Drag & drop
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropAreaBefore.addEventListener(eventName, preventDefaults, false)
  })

dropAreaBefore.addEventListener('drop', handleDropBefore, false);
function handleDropBefore(e) {
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
        let url = URL.createObjectURL(selectedFile);
        slider.setBefore(url);
    }
}
// END BEFORE----------

// AFTER ----------
// Handle button
inputAfter.onchange = () => {
    const selectedFile = inputAfter.files[0]

    if (selectedFile) {
        let url = URL.createObjectURL(selectedFile);
        slider.setAfter(url);
    }
}
// Drag & drop
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropAreaAfter.addEventListener(eventName, preventDefaults, false);
  })

dropAreaAfter.addEventListener('drop', handleDropAfter, false);
function handleDropAfter(e) {
    const selectedFile = e.dataTransfer.files[0];

    if (selectedFile) {
        let url = URL.createObjectURL(selectedFile);
        slider.setAfter(url);
    }
}
// END AFTER ----------
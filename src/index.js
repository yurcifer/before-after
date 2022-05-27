import Slider from "./slider.js";
// import Dropzone from "/node_modules/dropzone/src/dropzone.js";

const slider = new Slider('slider', {
    before: '../assets/before.png',
    after: '../assets/after.png',
});

const inputBefore = document.getElementById('input-before')
const inputAfter = document.getElementById('input-after')

// set before image on file load
inputBefore.onchange = () => {
    const selectedFile = inputBefore.files[0];
    const reader = new FileReader();
    console.log(selectedFile);

    // reading file
    reader.onload = function () {
        slider.setBefore(reader.result)
    };

    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
    };
}

// set after image on file load
inputAfter.onchange = () => {
    const selectedFile = inputAfter.files[0];
    const reader = new FileReader();
    console.log(selectedFile);

    // reading file
    reader.onload = function () {
        slider.setAfter(reader.result)
    };

    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
    };
}

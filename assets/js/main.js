const inputHeight = document.getElementById('input-height');
const inputAge = document.getElementById('input-age');
const inputWeight = document.getElementById('input-weight');
const inputFemale = document.getElementById('input-female');
const inputMale = document.getElementById('input-male');
const inputActivity = document.getElementById('input-activity');
const outputBasicKcal = document.getElementById('output-basic-kcal');
const outputBasicKj = document.getElementById('output-basic-kj');
const outputTotalKcal = document.getElementById('output-total-kcal');
const outputTotalKj = document.getElementById('output-total-kj');

let calc = () => {
    console.log(inputHeight.value);
    console.log(inputAge.value);
    console.log(inputWeight.value);
    console.log(inputFemale.checked);
    console.log(inputMale.checked);
    console.log(inputActivity.value);
    if (inputFemale.checked) {
        let basicFemale = (655.1 + (9.6 * inputWeight.value) + (1.8 * inputHeight.value) - 4.7 * inputAge.value);
        outputBasicKcal.innerHTML = basicFemale.toFixed()
        outputBasicKj.innerHTML = (basicFemale * 4.1868).toFixed();
        outputTotalKcal.innerHTML = (basicFemale * inputActivity.value).toFixed();
        outputTotalKj.innerHTML = (basicFemale * 4.1868 * inputActivity.value).toFixed();
    }
    else {
        let basicMale = (664.7 + (13.7 * inputWeight.value) + (5 * inputHeight.value) - 6.8 * inputAge.value);
        outputBasicKcal.innerHTML = basicMale.toFixed()
        outputBasicKj.innerHTML = (basicMale * 4.1868).toFixed();
        outputTotalKcal.innerHTML = (basicMale * inputActivity.value).toFixed();
        outputTotalKj.innerHTML = (basicMale * 4.1868 * inputActivity.value).toFixed();
    }
};


const options = document.querySelectorAll('.input-radio');
const metric = document.getElementById('thisMetric');
const imperial = document.getElementById('thisImperial');
const radioMetric = document.getElementById('metric');

const inputCM = document.getElementById('cm');
const inputKG = document.getElementById('kg');
const resultContent = document.querySelector('.result');

function whatOption(e) {
    if (e.currentTarget.id === 'metric') {
        metric.style.display = 'block';
        imperial.style.display = 'none';
    } else if (e.currentTarget.id === 'imperial') {
        metric.style.display = 'none';
        imperial.style.display = 'block';
    }
}

function resetAll() {
    metric.style.display = 'block';
    imperial.style.display = 'none';
    radioMetric.checked = true;
    resultContent.innerHTML = `<h3 class="welcome">Welcome!</h3>
                    <p class="result__text">Enter your height and weight and you'll see your BMI result here</p>`
    inputCM.value = '';
    inputKG.value = '';
    resultContent.style.flexDirection = 'column';
        resultContent.style.alignItems = 'flex-start';
}

function doBMI(weight, height) {
    return weight / (height * height);
}

function saveInput() {
    const cm = parseInt(inputCM.value);
    const kg = parseInt(inputKG.value);

    if (!isNaN(cm) && !isNaN(kg)) {
        const meters = cm / 100;
        const resultBMI = doBMI(kg, meters);

        resultContent.innerHTML = `
            <div class="result-content">
                <p class="result__is">Your BMI is...</p>
                <h2 class="result__score">${resultBMI.toFixed(1)}</h2>
            </div>
            <p class="result__text">Your BMI suggests you're a healthy weight. Your ideal weight is between <span class="bmi">63.3kgs - 85.2kgs.</span></p>
        `;
        resultContent.style.flexDirection = 'row';
        resultContent.style.alignItems = 'center';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    resetAll();
});

options.forEach(option => option.addEventListener('change', whatOption));
inputCM.addEventListener('input', saveInput);
inputKG.addEventListener('input', saveInput);

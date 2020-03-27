const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

const $moon = document.getElementById('moon');
const $sun = document.getElementById('sun');
// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i += 1) {
    $hoverables[i].addEventListener('mouseover', onMouseHover);
    $hoverables[i].addEventListener('mouseout', onMouseHoverOut);
}
var mouseX = 0,
    mouseY = 0;
var xp = 0,
    yp = 0;

// Move the cursor
function onMouseMove(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    $smallBall.style.left = mouseX - 5 + 'px';
    $smallBall.style.top = mouseY - 5 + 'px';
}
setInterval(function () {
    xp += ((mouseX - xp) / 6);
    yp += ((mouseY - yp) / 6);
    $bigBall.style.left = xp - 50 + 'px';
    $bigBall.style.top = yp - 50 + 'px';
}, 10);

function onMouseHover() {
    $bigBall.style.transform = 'scale(1.4)';
}

function onMouseHoverOut() {
    $bigBall.style.transform = 'scale(.4)';
}


// HELLO WORLD ANIMATION 
const phraselist = [
    "Привет, Мир!",
    "Совет: включитe инструменты разработчика, весь код прокомментирован",
    "Спасите",
    "Этот сайт весит менее 300кб.",
    "... а так же имеет 100 баллов на Google Page Speed",
    "... и адаптирован под мобильные, даже если вы отключите javascript в браузере",
    "В свободное время занимаюсь фотомонтажем и оригами. Пишите!",
    "My english is about intermediate. But i'm still learning!",
    "Пишу код за еду, возможен торг",
    "Серьезно: стараюсь использовать минимум js для максимальной скорости загрузки и адекватном отображении в условиях тайги",
    "Уровень владения языками программирования - могу написать простую нейросеть на js, java, C#, Python",
    "Этот сайт написан под последние версии Chrome & Firefox. Фоллбека для IE нет!",
    "Знаю отличного дизайнера(веб, графика, полиграфия, монтаж). Ссылка в контактах."
];

let helloworld = document.getElementById('hello-world');
let letterPrintTime = 50;
let timePerPhrase = 5000;

function printMessage(input) {
    input = input.split('');
    helloworld.innerHTML = '<mark>$</mark>:';
    let i = 0;
    let messageInterval = setInterval(function () {
        helloworld.innerHTML += input[i];
        if (i >= input.length - 1) {
            i = 0;
            clearInterval(messageInterval);
            // setTimeout(phraseGame, 3000);
        }
        i += 1;
    }, letterPrintTime);
}

let lastRandom = null;

function phraseGame() {
    // const randomElement = phraselist[Math.floor(Math.random() * phraselist.length)];
    // printMessage(randomElement);

    // Наилучший вариант с использованием цикла
    phraselist.forEach(function (value, currentIndex) {
        setTimeout(function () {
            printMessage(value);
        }, timePerPhrase * currentIndex);
    });
}
phraseGame();
setInterval(phraseGame, timePerPhrase * (phraselist.length + 1));


// PROGRESS 
var openTime = Math.floor(27 + Math.random() * (49 + 1 - 27));

let progressBar = document.getElementById('progressBar');
var bar = new ProgressBar.Circle(progressBar, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1000,
    color: 'rgb(var(--color_text))',
    trailColor: 'transparent',
    trailWidth: 1,
    text: '25',
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', 'rgb(var(--color_text))');

        var value = Math.round(circle.value() * openTime);
        if (value === 0) {
            circle.setText('27');
        } else {
            circle.setText(value);
        }

    }
});

let statictic_checkbox = document.getElementById('statistics_checkbox');

function statistics_checkboxHandler(e) {
    if (e.target.checked) {
        bar.animate(openTime / 100);
        let userTime = setInterval(() => {
            openTime += 1;
            bar.set();
        }, 1000);
    } else {
        bar.set(0);
    } // Number from 0.0 to 1.0
}
statictic_checkbox.addEventListener('click', statistics_checkboxHandler, {
    once: true
});
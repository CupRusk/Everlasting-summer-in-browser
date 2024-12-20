const background = document.getElementById('background');
const dialogue = document.getElementById('dialogue');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');

// Функция для смены сцены
function nextScene(option) {
    if (option === 1) {
        // Меняем фон, текст и кнопки
        background.classList.add('blur');
        setTimeout(() => {
            background.style.backgroundImage = `url('clubs.webp')`;
            dialogue.innerText = 'Вы идёте в лагерь. Он выглядит заброшенным.';
            choice1.innerText = 'Зайти внутрь';
            choice2.innerText = 'Оглядеться вокруг';
            choice1.setAttribute('onclick', 'nextScene(3)');
            choice2.setAttribute('onclick', 'nextScene(4)');
            background.classList.remove('blur');
        }, 1000);
    } else if (option === 2) {
        // Меняем текст и фон для другой ветки
        background.classList.add('blur');
        setTimeout(() => {
            background.style.backgroundImage = `url('AutoBus.webp')`;
            dialogue.innerText = 'Вы решили остаться снаружи и наблюдать.(Да мой косяк, забыл сделать вечерний автобус)';
            choice1.innerText = 'Подойти к окну';
            choice2.innerText = 'Уйти прочь';
            choice1.setAttribute('onclick', 'nextScene(5)');
            choice2.setAttribute('onclick', 'nextScene(6)');
            background.classList.remove('blur');
        }, 1000);
    } else if (option === 3) {
        alert('Вы зашли внутрь. Конец демо!');
    } else if (option === 4) {
        alert('Вы решили оглядеться. Конец демо!');
    } else if (option === 5) {
        alert('Вы подошли к окну. Конец демо!');
    } else if (option === 6) {
        alert('Вы ушли прочь. Конец демо!');
    }
}
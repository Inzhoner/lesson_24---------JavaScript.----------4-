//+ Задача №1
//- Дано в html: три елементи з класом .item. При кліку на кожен з елементів додати клас .active, при повторному кліку прибрати клас
document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        console.log(
            `${item.textContent} class toggled: ${item.classList.contains(
                'active'
            )}`
        );
    });
});

//-================================================================

//+ Задача №2
//- Дано в CSS/SCSS: <body> прозорий. При повному завантаженню сторінки додати клас до <body>, який прибирає прозорість.

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('Сторінка завантажена та class "loaded" додано до body.');
});

//-================================================================

//+ Задача №3
//- Дано в HTML: <block-1>, <block-2>, <block-3>. При наведенні курсору на <block-1> змінювати колір фону у <block-3>. Коли курсор йде з <block-1>, повертати початковий фон для <block-3>.

document.addEventListener('DOMContentLoaded', () => {
    const block1 = document.getElementById('block-1');
    const block3 = document.getElementById('block-3');

    block1.addEventListener('mouseenter', () => {
        block3.style.backgroundColor = 'yellow';
        console.log('При наведенні курсору на  Block 1: змінюється колір Block 3 на yellow');
    });

    block1.addEventListener('mouseleave', () => {
        block3.style.backgroundColor = 'coral';
        console.log('Курсор йде з Block 1: повертається колір Block 3 до coral');
    });
});

//-================================================================

//+ Задача №4
//- Дано в html: текст, елемент з класом .item, текст. Так, що елемент з класом .item за межами в'юпорта. Створити функцію яка будує інтервал який буде змінювати контент в елементі .item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д. Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента .item. Функція має запускатись коли ми доскролюємо до елементу .item (його видно), і не запускатись повторно.

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelector('.items');
    let observer;

    function startCounting() {
        const delay = parseInt(items.getAttribute('data-delay'), 10) || 1000;
        const max = parseInt(items.getAttribute('data-max'), 10) || 10;
        let count = 0;

        const intervalId = setInterval(() => {
            count += 1;
            items.textContent = count;
            console.log(count);

            if (count >= max) {
                clearInterval(intervalId);
            }
        }, delay);
    }

    function onVisibilityChange(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.disconnect(); // Disconnect observer after starting the count
            }
        });
    }

    observer = new IntersectionObserver(onVisibilityChange);
    observer.observe(items);
});

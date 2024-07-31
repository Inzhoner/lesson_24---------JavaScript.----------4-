//+ Задача №1
//- Отримати в константу елемент <body>.

/// Варіант 1
// const body = document.body;
// console.log(body);
//// Отримуємо елемент <body> за допомогою __document.body__

/// Варіант 2
// const { body } = document;
// console.log(body);
//// Використовуємо деструктуризацію об'єкта.

/// Варіант 2.1
////Можливо отримати кілька властивостей з document. Наприклад:
// const { body, head, documentElement } = document;
// console.log(body);

//-================================================================

//+ Задача №2
//- Написати функцію, яка додає в <body> список <ul> з певною кількістю <li> (кількість має передаватись як параметр функції, також мати значення за замовченням).

// const { body } = document;

// function addListToBody(itemCount = 3) {
//     const ul = document.createElement('ul');
//     for (let i = 1; i <= itemCount; i++) {
//         const li = document.createElement('li');
//         li.textContent = `Item ${i}`;
//         ul.appendChild(li);
//     }
//     body.appendChild(ul);
//     console.log(`Added ${itemCount} list items to the body.`);
// }

//// Виклик функції зі значенням за замовченням
// addListToBody();

//// Виклик функції з заданою кількістю елементів
// addListToBody(10);

//-================================================================

//+ Задача №3
//- Додати до елементу <body> клас .loaded. Потім перевірити чи є клас .loaded у елемента <body> і, якщо є, додати стиль кольору тексту зелений.

const { body } = document;

body.classList.add('loaded');

if (body.classList.contains('loaded')) {
    body.style.color = 'green';
    body.style.fontSize = '30px';
}

//-================================================================

//+ Задача №4
//- Дано в html: три елементи з класом .item. Треба отримати ці елементи в константу, кожному додати клас .active, та перезаписати контент всередині кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const items = Array.from(document.querySelectorAll('.item'));

items.forEach((item, index) => {
    item.classList.add('active');
    item.textContent = `Елемент №${index + 1}`;
});

//-================================================================

//+ Задача №5
//- Дано в html: текст, далі кнопка з класом .button. Треба прокрутити скрол сторінки до кнопки.

const button = document.querySelector('.button');

// Прокручуємо до кнопки через 2 секунди після завантаження сторінки
setTimeout(() => {
    button.scrollIntoView({ behavior: 'smooth' });
}, 2000);

//-================================================================

//+ Задача №6
//- Дано в html: посилання з класом .link. Треба додати до посилання дата атрибут зі значенням 100. Поім отримати значення атрибуту, та, якщо значення менше 200 пофарбувати колір тексту посилання в червоний.
// Знаходимо елемент з класом .link
const link = document.querySelector('.link');

// Додаємо атрибут data-date зі значенням 100
link.setAttribute('data-date', 100);

// Отримуємо значення атрибуту
const dataDate = link.getAttribute('data-date');

// Перевіряємо значення і змінюємо колір якщо виконується умова
if (dataDate < 200) {
    link.style.color = 'red';
}

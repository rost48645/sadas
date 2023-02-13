let zoo = [] //obj
let arr = [] //dom

let container = document.querySelector('.container')
let button = document.querySelector('.button')
let start = document.querySelector('#start')

class Hamster {
    constructor() {
        this.y = '510px';
        this.x = Math.floor(Math.random() * 900 + 10) + 'px';
        this.food = [];
    }
}

button.addEventListener('click', () => {
    zoo.push(new Hamster);
    container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк.png" alt=""></div>');
    //container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк1.png" alt=""></div>');
    //container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк2.png" alt=""></div>');
    arr = document.querySelectorAll('.hamster');
    arr.forEach((el, index) => {
        el.style.top = zoo[index].y
        el.style.left = zoo[index].x
    })
})
button.addEventListener('click', () => {
    zoo.push(new Hamster);
    //container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк.png" alt=""></div>');
    //container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк1.png" alt=""></div>');
    container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк2.png" alt=""></div>');
    arr = document.querySelectorAll('.hamster');
    arr.forEach((el, index) => {
        el.style.top = zoo[index].y
        el.style.left = zoo[index].x
    })
})

button.addEventListener('click', () => {
    zoo.push(new Hamster);
    //container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк.png" alt=""></div>');
    container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк1.png" alt=""></div>');
    //container.insertAdjacentHTML('afterbegin', '<div class="hamster"><img src="img/хамяк2.png" alt=""></div>');
    arr = document.querySelectorAll('.hamster');
    arr.forEach((el, index) => {
        el.style.top = zoo[index].y
        el.style.left = zoo[index].x
    })
})


const starting = () => {
    let interval = setInterval(() => {
        arr.forEach((el, index) => {
            let speed = Math.floor(Math.random() * 25 + 10)
            let currentY = window.getComputedStyle(el).top.slice(0, -2)
            currentY -= speed
            el.style.top = currentY + 'px'
            if (currentY <= 0) {
                clearInterval(interval)
                zoo[index].food.push('1место(золото)')
                zoo[index].food.push('2место(серебро)')
                zoo[index].food.push('3место(бронза)')
                zoo[index].food.push('4место(железо)')
            }

        })
    }, 250)
}

start.addEventListener('click', starting)





















// let arr = [];
// let zoo = [];

// class Hamster {
//     constructor() {
//         this.y = '510px';
//         this.x = Math.floor(Math.random() * 905 + 5) + 'px';
//         this.food = [];
//     }
// }

// const button = document.querySelector('.button')
// const start = document.querySelector('#start')
// const container = document.querySelector('.container')

// button.addEventListener('click', () => {
//     zoo.push(new Hamster);
//     container.insertAdjacentHTML('beforeend', `<div class='hamster'></div>`);
//     arr = document.querySelectorAll('.hamster')
//     arr.forEach((el, i) => {
//         el.style.top = zoo[i].y;
//         el.style.left = zoo[i].x;
//     })
// })

// const starting = () => {
//     start.removeEventListener('click', starting);
//     let reverseFalling = setInterval(() => {
//         arr.forEach((el, index) => {
//             let currentY = +window.getComputedStyle(el).top.slice(0, -2)
//             currentY -= Math.floor(Math.random() * 20);
//             el.style.top = currentY + 'px';
//             if (currentY <= 0) {
//                 clearInterval(reverseFalling);
//                 zoo[index].food.push('торт');
//             }
//         })
//     }, 30)
// }

// start.addEventListener('click', starting)





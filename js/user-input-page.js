let item = JSON.parse(localStorage.getItem('item'));
let img = document.getElementById('img');

console.log(item.image);
img.src = item.image;

function next() {

    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]))
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    let found = 1;
    cart.forEach(function (el) {
        if (el.name === item.name) {
            found = 0;
        }
    })
    if (found)
        cart.push(item);

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = "thankyou.html"
}

let reset_btn = document.getElementById('reset');
reset_btn.addEventListener('click', reset)

function reset() {
    window.location.href = "user-input-page.html";
}
let search_btn = document.getElementById('search-btn');
let search = document.getElementById('searchbar');
let tell_us = document.getElementById('tellusinput');
let tell_us_btn = document.getElementById('tell-us-btn')

let reg = document.getElementById('reg');

tell_us_btn.addEventListener('click', function () {
    goto_search_page(tell_us);
})
search_btn.addEventListener('click', function () {
    goto_search_page(search);
});


function goto_search_page(str) {

    localStorage.setItem('search', JSON.stringify(str.value))

    window.location.href = 'html/search-products.html';
}





let update_btn = document.getElementById('update-btn');
update_btn.style.marginTop = '0px';
update_btn.addEventListener('click', function (e) {
    e.preventDefault();
    update();
})

function update() {
    let num = document.getElementById('update').value;
    let output_p = document.getElementById('check-num');
    output_p.style.margin = '0px';
    output_p.style.marginLeft = '73px';
    output_p.style.color = 'red';

    if (num.length === 10) {
        let found = 1;
        let arr = JSON.parse(localStorage.getItem('users'));

        arr.forEach(function (el) {
            if (el.number === num) {
                localStorage.setItem('fname', JSON.stringify(el.fname));

                if (localStorage.getItem('fname') !== null) {

                    reg.innerText = JSON.parse(localStorage.getItem('fname'));

                    output_p.style.color = 'green';
                    output_p.innerText = `* Welcome ${el.fname}`;

                    num = '';
                }
                found = 0;


            }
        })
        if (found) {
            output_p.innerText = `* Number doesn't exist`
        }
    }
    else {
        output_p.innerText = '* Please Enter a valid number'
    }


    setTimeout(function () {
        window.location.href = 'index.html';
    }, 2000)
}

if (localStorage.getItem('fname') !== null && JSON.parse(localStorage.getItem('fanme') !== '')) {
    let reg = document.getElementById('reg');
    reg.innerHTML = JSON.parse(localStorage.getItem('fname'));
}


function signout() {

    console.log('singout');
    let fname = JSON.parse(localStorage.getItem('fname'));

    fname = 'Registration';

    localStorage.setItem('fname', JSON.stringify(fname));

    window.location.href = 'index.html';


}
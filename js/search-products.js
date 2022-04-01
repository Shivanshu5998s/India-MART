let body = document.getElementById('cont');
let loc = document.getElementById("loc");
let h2 = document.createElement('h2');
h2.style.margin = '5% 1% -4%';


let container = document.createElement('div');
container.style.display = 'grid';
container.style.gridTemplateColumns = '37% 37% 37%';
container.style.gridGap = '1%';
container.style.margin = "3%";

console.log(h2);
let line1 = document.createElement('div');

line1.setAttribute("id", "line1");

let imgloc = document.createElement("img");
imgloc.src = "https://img.icons8.com/material-rounded/24/fa314a/place-marker.png";
imgloc.style.padding = "1% 1%";
imgloc.style.height = "16px";

let list = document.createElement('li');
list.style.listStyle = "none";
list.textContent = "Location";
list.style.color = 'grey';
list.style.textAlign = 'center';
list.style.margin = "1% -1%";
let input = document.createElement("input");
input.style.height = "23px";
input.style.width = "13%";
input.style.margin = ".5% 2%";
input.setAttribute("placeholder", "Enter City");
let near = document.createElement('img');
near.src = "https://img.icons8.com/officexs/16/000000/near-me.png";
near.style.padding = "1% 1%";
near.style.height = "16px";
near.style.margin = '0% -2%';

let nearme = document.createElement('p');
nearme.textContent = 'Near Me';
nearme.style.fontSize = '15px';
nearme.style.color = 'grey';
nearme.style.margin = '1.1% 1.3% -3%';

let rigthcontent = document.createElement('li');

rigthcontent.style.listStyle = 'none';
rigthcontent.style.margin = '1.3% 1.3% -3% ';
rigthcontent.textContent = "All India";
rigthcontent.style.fontSize = "15px";

let city = document.createElement('li');

city.style.listStyle = 'none';
city.style.margin = '1.3% 1.3% -3% ';
city.textContent = "Indore";
city.style.fontSize = "13px";
city.style.color = "grey";

let city1 = document.createElement('li');

city1.style.listStyle = 'none';
city1.style.margin = '1.3% 1.3% -3% ';
city1.textContent = "Delhi";
city1.style.fontSize = "13px";
city1.style.color = "grey";

let city2 = document.createElement('li');

city2.style.listStyle = 'none';
city2.style.margin = '1.3% 1.3% -3% ';
city2.textContent = "Chennai";
city2.style.fontSize = "13px";
city2.style.color = "grey";

let city3 = document.createElement('li');

city3.style.listStyle = 'none';
city3.style.margin = '1.3% 1.3% -3% ';
city3.textContent = "Hyderabad";
city3.style.fontSize = "13px";
city3.style.color = "grey";

let city5 = document.createElement('li');

city5.style.listStyle = 'none';
city5.style.margin = '1.3% 1.3% -3% ';
city5.textContent = "bengaluru";
city5.style.fontSize = "13px";
city5.style.color = "grey";

let city6 = document.createElement('li');

city6.style.listStyle = 'none';
city6.style.margin = '1.3% 1.3% -3% ';
city6.textContent = "Mumbai";
city6.style.fontSize = "13px";
city6.style.color = "grey";

let city7 = document.createElement('li');

city7.style.listStyle = 'none';
city7.style.margin = '1.3% 1.3% -3% ';
city7.textContent = "Pune";
city7.style.fontSize = "13px";
city7.style.color = "grey";

let city8 = document.createElement('li');

city8.style.listStyle = 'none';
city8.style.margin = '1.3% 1.3% -3% ';
city8.textContent = "Ahmedabad";
city8.style.fontSize = "13px";
city8.style.color = "grey";

let city9 = document.createElement('li');

city9.style.listStyle = 'none';
city9.style.margin = '1.3% 1.3% -3% ';
city9.textContent = "Kolkata";
city9.style.fontSize = "13px";
city9.style.color = "grey";

line1.append(imgloc, list, input, near, nearme, rigthcontent, city, city1, city2, city3, city5, city6, city7, city8, city9);
loc.append(h2, line1);
body.append(container);

let search_btn = document.getElementById('search-btn');

if (localStorage.getItem('search') != null) {
    search_func();
}


search_btn.addEventListener('click', function (e) {
    e.preventDefault();
    search_func();
})

function search_func() {
    let upper = document.getElementById("upper");
    let left = document.getElementById("left");

    upper.style.visibility = "visible";
    left.style.visibility = "visible";
    container.innerHTML = null;

    let search = document.getElementById('search-bar');

    if (search.value != '') {
        localStorage.setItem('search', JSON.stringify(search.value));
    };

    str = JSON.parse(localStorage.getItem('search'));
    console.log('str', str);
    h2.innerHTML = str;

    str = str.toLowerCase();

    let count = 0;

    data.forEach(function (product) {

        let to_check = product.name;
        to_check = to_check.toLowerCase();
        let arr = to_check.trim().split(' ');
        console.log(arr);

        if (arr.includes(str)) {
            count++;
            showProduct(product);
        }
    });

    h2.innerHTML += ' ( ' + count + ' )';
}




function showProduct(product) {

    let div = document.createElement('div');
    div.style.height = '520px';
    div.style.boxShadow.hover = '3px grey';
    div.style.borderRadius = '3px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.backgroundColor = "white"

    let img = document.createElement('img');
    img.src = product.image;
    img.style.width = '100%';
    img.style.maxHeight = "232px"
    img.style.margin = '20% 0%'
    img.style.overflow = 'hidden';

    let img_box = document.createElement('div');
    img_box.style.borderRadius = '3px';
    img_box.style.height = '330px';
    img_box.append(img);
    img_box.addEventListener('click', function () {
        newPage(product);
    })

    let contentdiv = document.createElement('div');
    contentdiv.style.height = '100px';
    contentdiv.style.width = "100%";
    contentdiv.style.margin = '-8%';
    let name = document.createElement('a');
    name.addEventListener('click', function () {
        add_item(product);
    })
    name.href = 'product-discription.html'
    name.innerHTML = product.name + ' ';
    name.style.fontSize = '18px';
    name.style.display = 'block';
    name.style.textAlign = 'center';
    name.style.textDecoration = 'none';

    let price = document.createElement('p');
    price.innerHTML = product.price;
    price.style.textAlign = 'center'
    price.style.margin = "1%"

    let productdetails = document.createElement('p');
    productdetails.innerHTML = product.product_dis;
    productdetails.style.textAlign = 'center';
    productdetails.style.display = 'block';

    let call = document.createElement('mo');
    call.innerHTML = "Call - " + product.phone_num;
    call.style.display = 'block';
    call.style.margin = '-2%';
    call.style.textAlign = 'center';

    contentdiv.append(name, price, productdetails, call);

    let btn = document.createElement('button');
    btn.innerHTML = 'Contact Supplier';
    btn.style.padding = '4% 12%';
    btn.style.borderRadius = '5px';
    btn.style.backgroundColor = "#157972";
    btn.style.cursor = 'pointer';


    btn.style.color = "white";
    btn.style.border = 'none';

    btn.addEventListener('click', function () {

        window.location.href = 'user-input-page.html';
        localStorage.setItem('item', JSON.stringify(product));
    })

    btn.addEventListener('click', function () {
    })

    div.append(img_box, contentdiv, btn);

    container.append(div);
}



function add_item(product) {
    localStorage.setItem('item', JSON.stringify(product));
}

function newPage(product) {
    localStorage.setItem('item', JSON.stringify(product));
    window.location.href = 'product-discription.html'
}
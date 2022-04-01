let prod_dis = JSON.parse(localStorage.getItem("item"));

console.log("cart:", prod_dis.image);

let imagediv = document.getElementById("imgd");

function disp(prod) {

    let div = document.createElement("img");
    div.src = prod_dis.image;
    imagediv.append(div);

    let pnam = document.getElementById("pname");
    pnam.textContent = prod_dis.name;

    let rate = document.getElementById("price");
    rate.innerHTML = prod_dis.price;

    let snam = document.getElementById("sname");
    snam.textContent = prod_dis.seller_name;

    let saddress = document.getElementById("sadd");
    saddress.textContent = prod_dis.sell_address;

    let no = document.getElementById("phno");
    no.textContent = "Call -" + prod_dis.phone_num;

    let virty = document.getElementById("vrty");
    virty.textContent = prod_dis.variety;

    let self = document.getElementById("slife");
    self.textContent = prod_dis.self_life;

    let butn = document.getElementsByClassName("btn");

    for (var i = 0; i < butn.length; i++) {
        butn[i].addEventListener("click", inputpg);
    }

    function inputpg() {
        window.location.href = "user-input-page.html";
    }
}

disp();

let supplier_btn = document.getElementById('btn');

btn.addEventListener('click', userInputPage)


function userInputPage() {
    window.location.href = "user-input-page.html";
}
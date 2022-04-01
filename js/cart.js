
let orders = JSON.parse(localStorage.getItem("cart"));
console.log(orders);

let parent1 = document.getElementById("container");
let parent2 = document.getElementById("outerbox");

//showProducts function definiiton
function showProducts() {

    orders.forEach(function (product) {

        let div1 = document.createElement('div')
        div1.style.class = 'upperbox';

        let div2 = document.createElement('div')
        div2.style.class = 'lowerbox';

        let product_name = document.createElement("h3");
        product_name.textContent = product.name;

        let product_price = document.createElement("p");
        product_price.textContent = " Price of the Product  -" + "   " + "  " + product.price;

        let product_size = document.createElement("p");
        product_size.textContent = " Size of the Product -" + "   " + product.size;

        let product_brand = document.createElement("p");
        product_brand.textContent = "Brand of the Product  -" + "   " + product.brand;

        let product_color = document.createElement("p");
        product_color.textContent = " Color  of the Product -" + "   " + product.color;

        let product_desire = document.createElement("h4");
        product_desire.textContent = "I am interested in buying " + product.name;



        let heading = document.createElement("h2");
        heading.textContent = "Seller Details";
        heading.style.textAlign = "center";
        heading.style.marginBottom = '-2%';

        let sellers_name = document.createElement("h2");
        sellers_name.textContent = product.seller_name;

        let sellers_address = document.createElement("h5");
        sellers_address.textContent = product.sell_address;

        let sellers_contact = document.createElement("h5");
        sellers_contact.textContent = product.phone_num;

        let div3 = document.createElement('div');
        div3.setAttribute("id", "details")

        let pay_option = document.createElement("button");
        pay_option.setAttribute("id", "btn");
        pay_option.textContent = "Pay Now";

        let hr = document.createElement("hr");
        hr.style.margin = "2% 30%";

        pay_option.addEventListener('click', payNow);


        div3.append(heading, sellers_name, sellers_address, sellers_contact);



        div2.append(div3, pay_option, hr);

        div1.append(product_name, product_price, product_size, product_brand, product_color, product_desire, div2);

        parent2.append(div1);

    });
}

showProducts();


//PayNow function definition
function payNow() {
    window.location.href = 'payment.html';
}
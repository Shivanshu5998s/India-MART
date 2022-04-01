let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    addProducts(event);
});

function addProducts(e) {
    e.preventDefault();

    if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify([]));
    }

    let container = document.createElement('div');

    let name = form.name.value;
    let price = form.price.value;
    let img = form.image.value;
    let size = form.size.value;
    let variety = form.variety.value;
    let brand = form.brand.value;
    let color = form.color.value;
    let seller = form.seller.value;
    let address = form.address.value;
    let contact = form.contact.value;
    let gst = form.gst.value;


    let product = {
        name,
        price,
        img,
        size,
        variety,
        brand,
        color,
        seller,
        address,
        contact,
        gst
    }

    let arr = JSON.parse(localStorage.getItem('products'));

    arr.push(product);

    localStorage.setItem('products', JSON.stringify(arr));
}
/* const Person = {
    name: '',
    lastname: '',
    email: '',
}

const User = {
    name: '',
    lastname: '',
    email: '',
}

const Product = {
    name: '',
    lastname: '',
    email: '',
}
console.log(Person);
console.log(User);
console.log(Product);



const user = [
    {
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
    },
    {
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
    },
    {
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
    },
    {
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
    }
]


// CLASS DECORECTION
// Non posso 
class ClassName {

} */


class Product {
    in_stock = false // Condiviso tra tutti le istanze della classe Product

    constructor(name, descrition, price, category, image_path, likes = 100) {
        this.name = name
        this.descrition = descrition
        this.price = price
        this.category = category
        this.image_path = image_path
        this.likes = likes
    }
    addLikes() {
        this.likes++
    }
}

const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
    new Product('Aoc 24inc Monitor', 'Ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp'),
]
console.log(products);

const productsElement = document.getElementById('products')

products.forEach(product => {
    const { name, price, descrition, image_path } = product
    const markup = `
    <div class="product">
    <div class="price">${price}</div>
    <img src="${image_path}" alt="${name}">
    <div class="product-body">
        <h3>${name}</h3>
        <p>${descrition}</p>
        <button data-product-price="${price}" data-product-name="${name}">Buy now</button>
    </div>
</div>
    `
    productsElement.insertAdjacentHTML('beforeend', markup)
})

const buttonsList = document.querySelectorAll('.product button')

let sum = 0;
buttonsList.forEach(button => {
    button.addEventListener('click', function () {
        /* console.log(this); */
        const product_price = this.getAttribute('data-product-price')
        const product_name = this.getAttribute('data-product-name')
        console.log(product_name, product_price);

        sum += parseFloat(product_price)

        document.querySelector('.cart').insertAdjacentHTML('beforeend',`<li> ${product_name} ${product_price}</li>`)

        document.querySelector('.total').innerHTML = `<strong>Total: € ${sum.toFixed(2)}</strong>`
    })
})
var Product =  require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('MacBook.local:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'it really is an awesome game tho!!!',
    price: 100
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aspernatur consequatur debitis dicta, dolores doloribus ea exercitationem harum modi odio optio possimus rerum sapiente sed tempore ullam voluptatem. Quibusdam!!!',
        price: 200
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aspernatur consequatur debitis dicta, dolores doloribus ea exercitationem harum modi odio optio possimus rerum sapiente sed tempore ullam voluptatem. Quibusdam!!!',
        price: 900
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Mega Wars',
        description: 'Total douche!!!',
        price: 300
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Of course xmen has to be dope!',
        price: 800
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aspernatur consequatur debitis dicta, dolores doloribus ea exercitationem harum modi odio optio possimus rerum sapiente sed tempore ullam voluptatem. Quibusdam!!!',
        price: 100
    })
];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}

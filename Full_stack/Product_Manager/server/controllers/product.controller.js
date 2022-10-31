
const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}


module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getProduct = (request, response) => {
    Product.find({ _id: request.params.id })
        // .then(product => console.log(product, "HERE"))
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}




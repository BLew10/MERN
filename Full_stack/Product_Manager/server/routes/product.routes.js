const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products/new', ProductController.createProduct);
    app.get("/api/products", ProductController.findAllProducts);
    app.put("/api/products/:id", ProductController.updateProduct)
    app.get("/api/products/:id", ProductController.getProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
}



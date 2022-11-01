
const { Author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createAuthor = (request, response) => {
    const { firstName, lastName } = request.body;
    Author.create({
        firstName,
        lastName
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}


module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.getAuthor = (request, response) => {
    Author.find({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.updateAuthor = (request, response) => {
    const { firstName, lastName } = request.body;
    Author.findOneAndUpdate({ _id: request.params.id }, {firstName, lastName} , { new:true, runValidators: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}




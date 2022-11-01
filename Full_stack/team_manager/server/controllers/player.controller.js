
const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPlayer = (request, response) => {
    const { fullName, position, games } = request.body;
    Player.create({
        fullName,
        position,
        games
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}


module.exports.findAllPlayers = (request, response) => {
    Player.find()
        .then(player => response.json(player))
        .catch(err => response.json(err));
}

module.exports.getPlayer = (request, response) => {
    Player.find({ _id: request.params.id })
        .then(player => response.json(player))
        .catch(err => response.json(err));
}

module.exports.updatePlayer = (request, response) => {
    const { fullName, position, games } = request.body;
    Player.findOneAndUpdate({ _id: request.params.id }, {fullName, position, games} , { new:true, runValidators: true })
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}




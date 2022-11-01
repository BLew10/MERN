const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get("/api/players", PlayerController.findAllPlayers);
    app.put("/api/players/:id", PlayerController.updatePlayer)
    app.get("/api/players/:id", PlayerController.getPlayer)
    app.delete("/api/players/:id", PlayerController.deletePlayer)
}



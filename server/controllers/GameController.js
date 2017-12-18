import GameModel from "../models/GameModel";

export function remove(req, res){
  GameModel.remove({_id: req.params.id })
  .then(games => {
    return res.send("you have deleted a game");
  });
}

export function list(req, res) {
  GameModel.find({}).exec()
   .then(games => {
     return res.json(games);
   });
}

export function create(req, res) {
  const contact = new GameModel({
   name: req.body.name,
   players: req.body.players,
   type: req.body.type,
   playtime: req.body.playtime
 });
 contact.save()
 .then(game => {
   return res.json(game);
 });

}

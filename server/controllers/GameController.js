import games from "../games";
import GameModel from "../models/GameModel";

export function list(request, response) {
  GameModel.find({})
    .exec()
    .then(games => {
      return response.json(games);
    });
}

export function show(request, response) {
  GameModel.findById(request.params.id)
    .exec()
    .then(game => {
      return response.json(game);
    });
}

export function create(request, response) {
  const game = new GameModel(request.body);
  game.save().then(game => response.json(game));
}

export function update(request, response) {
  return response.json((games[0].name = request.params.id));
}
export function remove(request, response) {
  GameModel.findByIdAndRemove(request.params.id)
    .exec()
    .then(game => {
      return response.json(game);
    });
}

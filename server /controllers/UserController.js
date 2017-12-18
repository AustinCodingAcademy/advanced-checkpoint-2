import users from '../users';
import UserModel from '../models/UserModel';

export function list(request, response) {
  UserModel.find({})
    .exec()
    .then(users => {
      return response.json(users);
    });
}

export function show(request, response) {
  UserModel.findById(request.params.id)
    .exec()
    .then(user => {
      return response.json(user);
    });
}

export function create(request, response) {
  const user = new UserModel(request.body);
  user.save().then(user => response.json(user));
}

export function update(request, response) {
  return response.json((UserModel[0].name = request.params.id));
}
export function remove(request, response) {
  UserModel.findByIdAndRemove(request.params.id)
    .exec()
    .then(user => {
      return response.json(user);
    });
}

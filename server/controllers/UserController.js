const UserModel = require("../models/UserModel.js");


module.exports.list = function list(req, res) {
  return UserModel.find({}).exec().then(users => res.json(users));
};
module.exports.show = function show(req, res) {
  return UserModel.findById(req.params.id).exec().then(user => res.json(user)); 
};
module.exports.create = function create(req, res) {
  const newUser = new UserModel(req.body);
  newUser.save().then(savedUser => res.json(savedUser));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
module.exports.remove = function remove(req, res) {
  return UserModel.findByIdAndRemove(req.params.id).exec().then(user => res.json(user)); 
}
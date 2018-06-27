const User = require("../models/UserModel.js");


module.exports.list = function list(req, res) {
  return UserModel.find({}).exec().then(Users => res.json(Users));
};
module.exports.show = function show(req, res) {
  return UserModel.findById(req.params.id).exec().then(User => res.json(User)); 
};
module.exports.create = function create(req, res) {
  const newUser = new UserModel(req.body);
  newUser.save().then(savedUser => res.json(savedUser));
};
// module.exports.update = function update(request, response) {
//   return response.json({theId: request.params.id});
// }
// module.exports.remove = function remove(request, response) {
//   return response.json({});
// }
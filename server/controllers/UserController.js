import UserModel from "../models/UserModel";

// app.get("/users", (request, response) => {
//   user.find({}).exec()
//   .then(users => {
//     return response.json(users);
//   });
// });

export function list(request, response) {
  UserModel.find({}).exec()
  .then(users => {
    return response.json(users);
  });
}

export function create(request, response) {
   const contact = new UserModel({
     name: request.body.name,
     age: request.body.age,
     gender: request.body.gender,
   });
   contact.save()
   .then(user => {
     return response.json(user);
   });
}


export function remove(request, response) {
  UserModel.remove({_id: request.params.id})
  .then(users => {
    return response.send("You have deleted a user.");
  });
}

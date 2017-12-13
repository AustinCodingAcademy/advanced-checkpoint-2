import Goat from "../models/Goat";

export function list(request, response) {
  Goat.find({}).exec().then(goats => {
    return response.json(goats);
  });
}

export function show(request, response) {
  Goat.findById(request.params.id).exec().then(goat => {
    return response.json(goat);
  });
}

export function create(request, response) {
  const goat = new Goat({
    eye: request.body.eye,
    color: request.body.color,
    age: request.body.age,
    type: request.body.type,
    yoga: request.body.yoga
  });
  goat.save().then(goat => {
    return response.json(goat);
  });
}

export function remove(request, response) {
  Goat.findByIdAndRemove(request.params.id).exec().then(goat => {
    return response.json(goat);
  });
}

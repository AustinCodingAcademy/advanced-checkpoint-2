import IpadModel from "../models/Ipad";

export function list(request, response) {
  IpadModel.find([]).exec()
  .then(ipads => {
    return response.json(ipads);
  })
};

export function show(request, response) {
  IpadModel.findById(request.params.id).exec()
  .then(ipad => {
    return response.json(ipad);
  });
};

export function create(request, response) {
  const newIpad = new IpadModel({
    model: request.body.model,
    memory: request.body.memory
  });
  newIpad.save()
  .then(ipad => {
    return response.json(ipad);
  });
}

export function remove(request, response) {
  IpadModel.findByIdAndRemove(request.params.id).exec()
  .then(ipads => {
    return response.json(ipads);
  });
}

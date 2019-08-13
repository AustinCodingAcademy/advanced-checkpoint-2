import VehicleModel from "../models/Vehicle";

export function list(request, response) {
  VehicleModel.find([]).exec()
  .then(vehicles => {
    return response.json(vehicles);
  })
};

export function show(request, response) {
  VehicleModel.findById(request.params.id).exec()
  .then(vehicle => {
    return response.json(vehicle);
  });
};

export function create(request, response) {
  const newVehicle = new VehicleModel({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model,
    color: request.body.color,
    price: request.body.price
  });
  newVehicle.save()
  .then(vehicle => {
    return response.json(vehicle);
  });
}

export function remove(request, response) {
  VehicleModel.findByIdAndRemove(request.params.id).exec()
  .then(vehicles => {
    return response.json(vehicles);
  });
}

export function update(request, response) {
  VehicleModel.findByIdAndUpdate(request.params.id).exec()
  .then(vehicle => {
    vehicle.year = request.body.year || vehicle.year;
    vehicle.make = request.body.make || vehicle.make;
    vehicle.model = request.body.model || vehicle.model;
    vehicle.color = request.body.color || vehicle.color;
    vehicle.price = request.body.price || vehicle.price;
    return vehicle.save();
  })
  .then(vehicle => {
    return response.json(vehicle);
  })
}

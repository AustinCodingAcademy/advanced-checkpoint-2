import Car from "../models/Car";

export function list(request, response) {
    Car.find({}).exec()
    .then(cars => {
        return response.json(cars);
    });
}

export function show(request, response) {
    Car.findById(request.params.id).exec()
    .then(cars => {
        return response.json(cars);
    });
}

export function create(request, response) {
    const car = new Car({
        make: request.body.make,
        model: request.body.model,
        year: request.body.year,
        color: request.body.color,
        engine: request.body.engine
    });
    car.save()
    .then(cars => {
        return response.json(cars);
    });
}

export function update(request, response) {
    return response.json(Car[0].name = request.params.id);
}

export function remove(request, response) {
    Car.findByIdAndRemove(request.params.id).exec()
    .then(cars => {
        return response.json(cars);
    });
}


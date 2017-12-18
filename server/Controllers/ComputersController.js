import Computer from "../models/Computer";


export function list(request, response) {
    Computer.find({}).exec()
    .then(computers => {
      return response.json(computers);
    });
}

export function show(request, response) {
    Computer.findById(request.params.id).exec()
    .then(computers => {
      return response.json(computers);
    });
   
}

export function create(request, response) {
    const computer = new Computer({
        brand: request.body.brand,
        memory: request.body.memory,
        color: request.body.color,
        mouse: request.body.mouse,
        keyboard: request.body.keyboard
      });
      computer.save()
      .then(computers => {
        return response.json(computers);
      });
}

export function update(request, response) {
    return response.json(Computer[0].name = request.params.id);
}
export function remove(request, response) {
    Computer.findByIdAndRemove(request.params.id).exec().then(computers => {
      return response.json(computers);
    });
  }

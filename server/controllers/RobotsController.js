import RobotModel from "../models/Robot";

export function list(request, response) {
  RobotModel.find({}).exec()
  .then(robots => {
    return response.json(robots);
  });
}
export function show(request, response) {
  RobotModel.findById(request.params.id).exec()
  .then(robot => {
    return response.json(robot);
  });
}
export function create(request, response) {
  // console.log('beginning of create function in server/controllers/RobotsController.js');
  // console.log(request.body.name);
  const robot = new RobotModel({
    name: request.body.name,
    movie: request.body.movie
  });
  console.log(robot);
  robot.save()
  .then(robot => {
    return response.json(robot);
  });
}

export function deleteRobot(request, response) {
  RobotModel.findByIdAndRemove(request.params.id, (err,robot) => {
    if(err){
      return response.json({'success':false,'message':'Some Error'});
    }
    return response.json({'success':true,'message':robot.name+' deleted successfully'});
  })
}

/*
Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {  
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Todo successfully deleted",
        id: todo._id
    };
    return res.status(200).send(response);
});
*/
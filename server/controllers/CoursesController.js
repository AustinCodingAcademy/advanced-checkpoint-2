//const courses = require("../courses");
const Course = require("../models/Course");

function list(request, response) {
    Course.find({}).exec()
    .then(courses => {
        return response.json(courses); 
    });
}

function show(request, response) {
    Course.findById(request.params.id).exec()
    .then(course => {
      return response.json(course);
    });
}

function create(request, response) {
    const course= new Course({
        courseid: request.body.courseid,
        name: request.body.name,
        length: request.body.length,
        subject: request.body.subject,
        teacher: request.body.teacher,
    });
    course.save()
    .then(courses => {
      return response.json(courses);
    });
}

function update(request, response) {
    Course.findById(request.params.id).exec()
    .then(course => {
      course.courseid = request.body.courseid || course.courseid;
      course.name = request.body.name || course.name;
      course.subject = request.body.subject || course.subject;
      course.length = request.body.length || course.length;
      course.teacher = request.body.teacher || course.teacher;
      return course.save();
    })
    .then(c=> {
      return response.json(c);
    });
}
  

function remove(request, response) {
    Course.findByIdAndRemove(request.params.id).exec()
    .then(courses => {
        return response.json(courses);
    });
}

module.exports = {
    list,
    show,
    create,
    update,
    remove
}

/*export function remove(request, response) {
    return response.json({});
}*/
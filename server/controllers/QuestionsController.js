//const questions = require("../questions");
const Question = require("../models/Question");

function list(request, response) {
    Question.find({}).exec()
    .then(questions => {
        return response.json(questions); 
    });
}

function show(request, response) {
    Question.findById(request.params.id).exec()
    .then(question => {
      return response.json(question);
    });
}

function create(request, response) {
    const question= new question({
        questionid: request.body.questionid,
        name: request.body.name,
        length: request.body.length,
        subject: request.body.subject,
        difficulty: request.body.difficulty,
    });
    question.save()
    .then(questions => {
      return response.json(questions);
    });
}

function update(request, response) {
    Question.findById(request.params.id).exec()
    .then(question => {
      question.questionid = request.body.questionid || question.questionid;
      question.name = request.body.name || question.name;
      question.subject = request.body.subject || question.subject;
      question.length = request.body.length || question.length;
      question.difficulty = request.body.difficulty || question.difficulty;
      return question.save();
    })
    .then(c=> {
      return response.json(c);
    });
}
  

function remove(request, response) {
    Question.findByIdAndRemove(request.params.id).exec()
    .then(questions => {
        return response.json(questions);
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
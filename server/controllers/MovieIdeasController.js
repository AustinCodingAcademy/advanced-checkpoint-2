import MovieIdeaModel from "../models/MovieIdeaModel";

export function list(request, response) {
  console.log("movieIdeasController list");
  MovieIdeaModel.find({}).exec()
 .then(movieIdeas => {
   //console.log("movieIdeasController list2");
   return response.json(movieIdeas);
 });
}

export function create(request, response) {
  console.log("MovieIdeasController create");
  const movieIdea = new MovieIdeaModel({
    body: request.body.body
  });
  movieIdea.save()
  .then(mov => {
    console.log("MovieIdeasController create");
    return response.json(mov);
  });
}

export function show(request, response) {
  console.log("MovieIdeasController request params",request.params);
  console.log("MovieIdeasController request.params.id",request.params.id);
  console.log("MovieIdeasController request.params.movieIdeaID",request.params.movieIdeaID);
  MovieIdeaModel.findById(request.params.movieIdeaID).exec()
  .then(movieIdea => {
    return response.json(movieIdea);
  });
}

export function update(request, response) {
  MovieIdeaModel.findById(request.params.id).exec()
    .then(movieIdea => {
      movieIdea.body = request.body.body || movieIdea.body;
      movieIdea.genre = request.body.genre || movieIdea.genre;
      return user.save();
    })
    .then(movieIdea => {
      return response.json(movieIdea);
    });
}

export function remove(request, response) {
 return response.json({});
}

/*export function show(request, response) {
  let id = request.params.movieIdeaID; //set id equal to the request in the url
  let movieIdea = movieIdeas.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(movieIdea);
}*/

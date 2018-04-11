import MovieModel from "../models/MovieModel"

export function list(request, response) {
 MovieModel.find({}).exec()
 .then(movies => {
   return response.json(movies);
 });
}
export function show(request, response) {
  MovieModel.find({_id: request.params.id}).exec()
  .then(movies => {
    return response.json(movies);
  });}
export function create(request, response) {
 const movie = new MovieModel({
   name: request.body.name,
   actor: request.body.actor,
   year: request.body.year,
   awards: request.body.awards,
   runtime: request.body.runtime
 });
 movie.save()
 .then(movie => {
   return response.json(movie);
 });
}
export function update(request, response) {
 return response.json({_id: request.params.id});
}
export function remove(request, response) {
 MovieModel.remove({_id: request.params.id})
   .then(movies => {
     return response.send("movie deleted");
   });
}

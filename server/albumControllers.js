import albumModel from "./albumModel"

// this function excepts a request and response and returns all of the items 
// in said schema
export function list(request, response) {
  albumModel.find({}).exec()
  .then(albums => {
    return response.json(albums)
  });
}
export function show(request, response) {
  let id = request.params.id;
  albumModel.findById(id).exec()
  .then(album => {
    return response.json(album);
  });
}

export function create(request, response) {
  const album = new albumModel(request.body)
  album.save()
  .then(album => {
    return response.json(album)
  });
}




export function update(request, response) {
  return response.json(comments[0].name = request.params.id);
}

export function remove(request, response) {
    let id = request.params.id;
    albumModel.findByIdAndRemove(id).exec()
    .then(album => response.json(album))
}

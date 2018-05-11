import PostModel from "../Models/PostModel";

export const list = (req, res) => {
  PostModel.find({}).exec()
  .then( posts => res.json(posts) );
};

export const show = (req, res) => {
  PostModel.findById(req.params.id).exec()
  .then( post => res.json(post) );
};

export const create = (req, res) => {
  PostModel.find({}).exec()
  .then( List => {
    // need to get the id of the LAST post in the list to avoid repeating ID's
    const lastPost = List[List.length - 1];
    console.log("lastPost = ",lastPost);
    console.log("id of lastPost: ", lastPost._id)
    const id = (lastPost._id + 1);
    const post = new PostModel({
      _id: id,
      location: req.body.location,
      item: req.body.item,
      condition: req.body.condition,
      price: req.body.price,
      seller: req.body.seller
    });
    post.save()
    .then( pos => res.json(pos) )
  });
};



export const remove = (req, res) => {
    PostModel.findByIdAndRemove(req.params.id).exec()
    .then(posts => {
        return res.json(posts);
    });
}

// export const remove = (req, res) => {
//   PostModel.find({}).exec()
//   .then( List => {
//     const post = List.map(function(item) { return item.id; }).indexOf(req.params.id);
//     List.splice(removeIndex, 1);
//   }
//     const removeIndex = List.map(function(item) { return item.id; }).indexOf(req.params.id);
//     List.splice(removeIndex, 1);
//     //   return res.json(List);
//   )
//   .then( thisPost => { thisPost.remove() }).exec();
//     .then.PostModel.find({}).exec()
//     .then( p => res.json(p))
// }

export const update = (req, res) => {
  PostModel.findById(req.params.id).exec()
  .then(post => {
    post.location = req.body.location;
    post.item = req.body.item;
    post.condition = req.body.condition;
    post.price = req.body.price;
    post.seller = req.body.seller;
    return post.save();
  })
  .then( post => res.json(post) );
}

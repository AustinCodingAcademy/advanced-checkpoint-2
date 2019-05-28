import GarmentModel from "../models/GarmentModel";


export function remove (req, res) {
    GarmentModel.remove({_id: req.params.id })
    .then(garments => {
      return res.send("you have deleted a garment!");
    });
}

export function list(req, res) {
    GarmentModel.find({}).exec()
    .then(garments => {
      return res.json(garments);
    });
   };

export function create(req, res) {
        const garment = new GarmentModel({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          color: req.body.color
        });
        garment.save()
        .then(garment => {
          return res.json(garment);
        });
}  

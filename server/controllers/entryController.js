import entryModel from "../models/entry";

export const list = (req, res, next) => {
    entryModel.find({}).exec()
    .then( (list) => {
        return res.json(list)
        }
    );
};

export const show = (req, res) => {
    entryModel.findOne({ id: req.params.id }).exec()
    .then( entry => res.json(entry) );
};

export function create(request, res) {
    entryModel.find({}).exec()
    .then( (list) => {
        const id = (list.length + 1);
        const date = new Date;
        const type = "Note";
        const ent = new entryModel({
            id,
            date,
            title: request.body.title,
            body: request.body.body,
            type
        });
        ent.save()
        .then((entry) => {
            return res.json(entry)
        })
    })
}

export function remove(req, res) {
    entryModel.findOne( {id: req.params.id} ).exec()
    .then( response => { response.remove() });
    entryModel.find({}).exec()
    .then( list => res.json(list))
}

export function update(req, res) {
    entryModel.findOne( {id: req.params.id}).exec()
    .then( doc => {
        doc.title = req.body.title;
        doc.body = req.body.body;
        doc.save();
    })
    .then( e => res.json(e) )
    .catch(err => console.log(err));
}

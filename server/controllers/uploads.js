import path from "path";

export function upload(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  let file = req.files.thumbnail;

  file.mv(path.join(__dirname, '..', 'models', 'uploads', req.body.slug), function(err) {
    if (err)
      return res.status(500).send(err);
  
    res.send(`'${file.name}' uplaoded to: localhost:3001/uploads/${req.body.slug}`);
  });
}

export function show(req, res){
  const image = req.params.image;

  res.sendFile(path.join(__dirname, '..', 'models', 'uploads', image));
}
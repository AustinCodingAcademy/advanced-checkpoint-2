import Stock from "../models/Stock";

export function list(request, response) {
  Stock.find({})
    .exec()
    .then((stocks) => {
      return response.json(stocks);
    });
}

export function show(request, response) {
  Stock.findById({
    _id: request.params.ticker,
  })
    .exec()
    .then((stock) => {
      return response.json(stock);
    });
}

export function create(request, response) {
  // use ticker as _id
  const { body } = request;
  const newStock = new Stock({
    _id: body.ticker,
    ticker: body.ticker,
    companyName: body.companyName,
    sector: body.sector,
    averageCost: Number(body.averageCost) || 0,
    shares: Number(body.shares) || 0,
    annualDividend: Number(body.annualDividend) || 0,
  });
  newStock.save().then((stock) => {
    return response.json(stock);
  });
}

export function update(request, response) {
  const stock = request.body;
  const query = { _id: stock._id };
  Stock.findOneAndUpdate(query, stock, { upsert: true }, (err) => {
    if (err) {
      return response.send(500, { error: err });
    }
    return response.json(stock);
  });
}

export function remove(request, response) {
  Stock.remove({ _id: request.params.ticker }, (err) => {
    if (err) {
      response.send(err);
    } else {
      response.send("deleted");
    }
  });
}

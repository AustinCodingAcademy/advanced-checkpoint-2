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
  const newStock = new Stock({_id: request.body.ticker, ...request.body});
  newStock.save().then((stock) => {
    return response.json(stock);
  });
}

// module.exports.update = function (request, response) {
//   const stock = new Stock(request.body);
//   stock.save().then((saved) => {
//     return response.json(saved);
//   });
// };

export function remove(request, response) {
  Stock.findByIdAndRemove(request.params.ticker);
  return response.send("deleted");
}

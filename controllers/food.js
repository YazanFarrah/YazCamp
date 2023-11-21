exports.getTacos = (req, res) => {
  res.send("GET /tacos response");
};

exports.postTacos = (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Your orders: ${meat}, ${qty}`);
};


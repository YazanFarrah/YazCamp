const express = require("express");

const app = express();
exports.app = app;

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h2>You requested ${subreddit} subreddit</h2>`);
});

app.get("/r/:subreddit/comments/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h2>You requested ${subreddit} subreddit in the postId: ${postId}</h2>`
  );
});

app.post("/bitch", (req, res) => {
  res.send("Akhh ur such a hoe!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.send("Nothing found");
  }
  res.send(`<h1>Query result for ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("Bitch what do you want! ");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

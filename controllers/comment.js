let comments = require("../data");
const { v4: uuid } = require("uuid");

exports.getComments = (req, res) => {
  res.render("comments/index", { comments });
};

exports.getNewComment = (req, res) => {
  res.render("comments/new");
};

exports.postNewComment = (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
  //   res.render("comments/new");
};

exports.getCommentById = (req, res) => {
  //to get the comment.id from params either use this : {id} = req.params
  //{inside} has to be exact name as in the route "/comments/:id"
  // or use  const id = req.params.id;

  const { id } = req.params;
  const comment = comments.find((c) => {
    return c.id === id;
  });
  if (!comment) {
    console.log("no comment found, redirecting to all comments");
    return res.redirect("/comments");
  }
  res.render("comments/show", { comment });
};

exports.getEditScreen = (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
};

exports.updateComment = (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  const newComment = req.body.comment;
  comment.comment = newComment;
  res.redirect("/comments");
};

exports.deleteComment = (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
};

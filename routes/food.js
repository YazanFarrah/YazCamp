const express = require("express");
const foodController = require("../controllers/food");
const commentsController = require("../controllers/comment");

const router = express.Router();

router.get("/tacos", foodController.getTacos);

router.post("/tacos", foodController.postTacos);

router.get("/comments", commentsController.getComments);

router.get("/comments/new", commentsController.getNewComment);

router.post("/comments", commentsController.postNewComment);

router.get("/comments/:id", commentsController.getCommentById);

router.get("/comments/:id/edit", commentsController.getEditScreen);

router.patch("/comments/:id", commentsController.updateComment);

router.delete("/comments/:id", commentsController.deleteComment);

module.exports = router;

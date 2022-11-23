const { Router } = require("express");

const usersRouter = require("./users.routes")
const movie_notesRouter = require("./movie_notes.routes")
const movie_tagsRouter = require("./movie_tags.routes")

const routes = Router();

routes.use("/users", usersRouter)
routes.use("/movie", movie_notesRouter)
routes.use("/tags", movie_tagsRouter)

module.exports = routes;
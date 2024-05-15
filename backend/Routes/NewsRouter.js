const express = require("express");
const { getNews } = require("../Controller/NewsController");

const routes = express.Router()

routes.get("/news", getNews);


module.exports =  routes

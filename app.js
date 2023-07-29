const express = require('express');
const bodyParser = require('body-parser');
const date = require("C:\\Users\\sarve\\Desktop\\toDolist-v1\\date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var hi = [];

app.get("/", function(req, res) {
  let day = ;
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  res.render("list", { day: day.toLocaleDateString("en-US", options), hi: hi });
});

app.post("/", function(req, res) {
  hi.push(req.body.input);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log('server is open at 3000');
});

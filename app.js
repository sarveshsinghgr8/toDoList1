const express = require('express');
const bodyParser = require('body-parser');
const date = require("C:\\Users\\sarve\\Desktop\\toDolist-v1\\date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var hi = [];

app.get("/", function(req, res) {
  // Get the current date
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { day: day, hi: hi });
});

app.post("/", function(req, res) {
  hi.push(req.body.input);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log('server is open at 3000');
});

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");

const app = express();
const port = process.env.Port || 3000;

//public file
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//debug
console.log("PATH: ", path.join(__dirname, "resources", "views"));

app.get("/", (req, res, next) => {
  res.render("home");
});

app.post("/", (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const opt = req.body.optName;
  var result;

  if (opt == "radio-plus") {
    result = num1 + num2;
    result = num1 + " + " + num2 + " = " + result;
  } else if (opt == "radio-minus") {
    result = num1 - num2;
    result = num1 + " - " + num2 + " = " + result;
  } else if (opt == "radio-multiply") {
    result = num1 * num2;
    result = num1 + " * " + num2 + " = " + result;
  } else if (opt == "radio-divide") {
    result = num1 / num2;
    result = num1 + " / " + num2 + " = " + result;
  }

  console.log(num1 + " " + num2 + " " + result);
  res.render("home", { num1: num1, num2: num2, result: result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

// app.use((err, req, res, next) => {
//   const statusCode = err.status || 500;

//   res.status(statusCode).render("error", {
//     title: `Error ${statusCode}`,
//     message: err.message,
//   });
// });

app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});

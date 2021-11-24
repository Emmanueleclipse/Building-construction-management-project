const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3111;

app.use(express.static(path.join(__dirname, "Client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started At ${port}`);
});

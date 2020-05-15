const express = require("express");
const app = new express();
const port = 5000;

app.use(express.static("./app"));

app.listen(port, () => {
  console.log(`Listening on ${port} !`);
});

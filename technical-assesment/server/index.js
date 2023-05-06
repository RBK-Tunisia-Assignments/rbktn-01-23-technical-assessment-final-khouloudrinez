const express = require("express");
const app = express();

const PORT = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");



//hello
app.use(cors());
app.use(bodyParser.json());



// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

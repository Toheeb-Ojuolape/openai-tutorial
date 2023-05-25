declare const require: any;
declare const process: any;
require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
import routes from "./src/routes/routes"
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening on PORT: ${port}`);
});


app.use(routes)
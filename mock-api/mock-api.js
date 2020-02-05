const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/", apiMocker("mock-api"));
app.listen(9000);
//https://saveswift-2b8ff.firebaseio.com/accounts/auth0%7C5b941aa872d4bb47f9a32abd.json - GET
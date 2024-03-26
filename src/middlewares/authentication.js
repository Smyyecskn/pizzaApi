"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Token = require("../models/token");

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization; // Token ...Tokenkey
  const tokenKey = auth ? auth.split(" ") : null; //["Token" ""...Tokenkey"]

  if (tokenKey) {
    if (tokenKey[0] == "Token") {
      const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
        "userId"
      );
      console.log(tokenData);
      if (tokenData) {
        req.user = tokenData.userId;
      }
    }
  }
  next();
};

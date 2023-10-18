const dotenv = require("dotenv");

module.exports = ({ options }) => {
  const parsedENV = dotenv.config().parsed;
  return Object.assign({}, parsedENV);
};

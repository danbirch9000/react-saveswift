const utils = require("../../utils");

module.exports = (request, response) => {
  console.log(request);
  setTimeout(() => {
    response.status(200).send({success: true});
    // response.status(404).send(payloadOneResult);
  }, utils.getRandomArbitrary(1000, 2000));
};

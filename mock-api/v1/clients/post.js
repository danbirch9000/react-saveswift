const utils = require("../../utils");

const responses = {
  500: { success: false },
  200: { success: true }
}


module.exports = (request, response) => {
  const query = request.query;
  const paramCount = Object.keys(query).length;
  if (paramCount === 1 && query.clientId) {
    const returnError = request.body.shortName === "ERR";
    setTimeout(() => {
      if (returnError) {
        return response.status(500).send(responses["500"]);
      } else {
        return response.status(200).send(responses["200"]);
      }
    }, utils.getRandomArbitrary(200, 5000));
  } else {
    return response.status(404).send({});
  }
};

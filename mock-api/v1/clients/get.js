const utils = require("../../utils");

module.exports = (request, response) => {
  const query = request.query;
  const paramCount = Object.keys(query).length;
  if (paramCount === 1 && query.clientId) {
    setTimeout(() => {
      response.json([
        {
          phoneNumber: "01234123123",
          returns: true,
          diversion: true,
          mobileApp: true,
          safeplacePhoto: true,
          hhtReturns: {
            description: "None",
            code: " "
          },
          clientName: "Ecomnova",
          clientId: 428,
          shortName: "DEB ",
          status: "A",
          thirdPartyFlag: "Y",
          thirdPartyAccount: ["Lorem"],
          thirdPartySoftware: [],
          childClientName: "Debenhams Flowers",
          childClientId: 1,
          businessAddress: {
            addressLine1: "Test Add 1",
            addressLine2: "Test Add 2",
            addressLine3: "",
            addressLine4: "Leeds",
            addressLine5: "West Yorks",
            addressLine6: "UK",
            postcode: "LS27 0WH"
          }
        }
      ]);
    }, utils.getRandomArbitrary(200, 2500));
  } else {
    return response.status(404).send({});
  }
};

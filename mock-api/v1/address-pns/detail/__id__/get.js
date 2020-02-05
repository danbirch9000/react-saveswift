const utils = require("../../../../utils");
// https://wfp-api.hermescloud.co.uk/v1/address-pns/detail/aWQ9NTA2MjMwMzJ-Zm9ybWF0aWQ9MjZmY2VmMjYtODg3Ni00NTUwLTg1N2YtN2UwNTc5ZWNmZTIxfnFsPTd-Z2VvPTA

const payload = {
  line1: "Barratt Yorkshire West",
  line2: "Raynham House",
  line3: "2 Capitol Close, Morley",
  line4: "LEEDS",
  line5: "",
  line6: "UNITED KINGDOM",
  postcode: "LS27 0WH"
};

module.exports = (request, response) => {
  setTimeout(() => {
    response.status(200).send(payload);
  }, utils.getRandomArbitrary(200, 2500));
};

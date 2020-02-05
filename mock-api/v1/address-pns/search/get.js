const utils = require("../../../utils");
// https://wfp-api.hermescloud.co.uk/v1/address-pns/search/?take=20&houseNumber=&postcode=ls270wh
const payload = {
  count: 3,
  result: [
    {
      id:
        "aWQ9Mjc1OTQwNDF-Zm9ybWF0aWQ9MWUxNjY4YTctNGFiNy00MDUwLWExMjctOGNkM2EyMzYwNzYyfnFsPTd-Z2VvPTA",
      suggestion:
        "Hermes Group, Capitol House, 1 Capitol Close, Morley, Leeds, LS27 ..."
    },
    {
      id:
        "aWQ9Mjc1OTQwNDJ-Zm9ybWF0aWQ9ZGFlOTZjYjUtMjQ1MC00MTg3LWEyODctMWI1ZTViZDgzNzVlfnFsPTd-Z2VvPTA",
      suggestion:
        "Barratt & David Wilson Homes, Raynham House, 2 Capitol Close, Morley, Leeds, LS27 ..."
    },
    {
      id:
        "aWQ9NTA2MjMwMzJ-Zm9ybWF0aWQ9MjZmY2VmMjYtODg3Ni00NTUwLTg1N2YtN2UwNTc5ZWNmZTIxfnFsPTd-Z2VvPTA",
      suggestion:
        "Barratt Yorkshire West, Raynham House, 2 Capitol Close, Morley, Leeds, LS27 ..."
    }
  ]
};
const payloadOneResult = {
  count: 1,
  result: [
    {
      id:
        "aWQ9NTA2MjMwMzJ-Zm9ybWF0aWQ9MjZmY2VmMjYtODg3Ni00NTUwLTg1N2YtN2UwNTc5ZWNmZTIxfnFsPTd-Z2VvPTA",
      suggestion:
        "Barratt Yorkshire West, Raynham House, 2 Capitol Close, Morley, Leeds, LS27 ..."
    }
  ]
};
module.exports = (request, response) => {
  setTimeout(() => {
    response.status(200).send(payload);
    // response.status(404).send(payloadOneResult);
  }, utils.getRandomArbitrary(3000, 5000));
};






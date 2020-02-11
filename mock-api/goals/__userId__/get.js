const utils = require("../../utils");
const payload = {
  "-L9sYgChiZd38xh9FHm2": {
    "accounts": [
      "-LBG_-iOrP5zeWc7L4LH",
      "-LaoKWmtGehwwLQqTUUL",
      "-LBG_BNnyfle0nvblCqX"
    ],
    "amount": "800",
    "description": "My savings goal 1",
    "id": "-L9sYgChiZd38xh9FHm2",
    "monthly": "800.00",
    "rate": "7.00",
    "startDate": "2017-04-12T07:33:06+01:00",
    "years": "20.00"
  },
  "-L9sdnMFDZc_TqXqs59H": {
    "accounts": [
      "-LBG_4y7N1RClHbhaMw4"
    ],
    "amount": "39135",
    "description": "My savings goal 2",
    "id": "-L9sdnMFDZc_TqXqs59H",
    "monthly": "600.00",
    "rate": "7.00",
    "startDate": "2018-04-12T07:59:49+01:00",
    "years": "30.00"
  },
  "-L9zrjSmjgdqbZqt-u8k": {
    "accounts": [
      "-LBG_BNnyfle0nvblCqX"
    ],
    "amount": "4500",
    "description": "My savings goal 3",
    "id": "-L9zrjSmjgdqbZqt-u8k",
    "monthly": "10.00",
    "rate": "6.00",
    "startDate": "2018-04-13T17:38:02+01:00",
    "years": "80.00"
  }
};

module.exports = (request, response) => {
  setTimeout(() => {
    response.status(200).send(payload);
    // response.status(404).send(payloadOneResult);
  }, utils.getRandomArbitrary(200, 2000));
};

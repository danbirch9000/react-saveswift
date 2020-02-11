const utils = require("../../utils");
const moment = require("moment");
const uuidv4 = require("uuid/v4");

const buildData = ({yearRange, intervals, incrementRange}) => {
  const start = moment().subtract(yearRange, "years");
  const daysDiff = moment().diff(start, "days");
  const dayInterval = Math.floor(daysDiff/intervals);
  let deposits = 0;
  let history = {};
  [...Array(intervals)].forEach((i,x) => {
    const inc = utils.getRandomArbitrary(incrementRange[0], incrementRange[1]);
    deposits = deposits + (deposits * 0.02) + inc;
    history[uuidv4()] = {
      date: moment().subtract(yearRange, "years").add(x*dayInterval, "days").format(),
      value: deposits.toFixed(2)
    };
  });
  return history;
};

const payload = {
  [uuidv4()]: {
    history: buildData({
      yearRange: 10,
      intervals: 60,
      incrementRange: [300, 850]
    }),
    name: "Account 1"
  },
  [uuidv4()]: {
    history: buildData({
      yearRange: 5,
      intervals: 28,
      incrementRange: [400, 450]
    }),
    name: "Account 2"
  },
  [uuidv4()]: {
    history: buildData({
      yearRange: 2,
      intervals: 15,
      incrementRange: [500, 750]
    }),
    name: "Account 3",
  }
};

module.exports = (request, response) => {
  setTimeout(() => {
    response.status(200).send(payload);
    // response.status(404).send(payloadOneResult);
  }, utils.getRandomArbitrary(1000, 2000));
};

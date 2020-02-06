const utils = require("../../utils");
import { uuid } from "vue-uuid";

import moment from "moment";
export const timestamp = moment().format();

export const buildData = ({yearRange, intervals, incrementRange}) => {
  const start = moment().subtract(yearRange, "years");
  const daysDiff = moment().diff(start, "days");
  const dayInterval = Math.floor(daysDiff/intervals);
  let deposits = 0;
  let history = {};
  [...Array(intervals)].forEach((i,x) => {
    const inc = utils.getRandomArbitrary(incrementRange[0], incrementRange[1]);
    deposits = deposits + (deposits * 0.02) + inc;
    history[uuid.v4()] = {
      date: start.add(x*dayInterval, "days").format(),
      value: parseFloat(deposits.toFixed(2))
    };
  });
  return history;
};

export const payload = {
  [uuid.v4()]: {
    history: buildData({
      yearRange: 10,
      intervals: 60,
      incrementRange: [300, 850]
    }),
    name: "1"
  },
  [uuid.v4()]: {
    history: buildData({
      yearRange: 5,
      intervals: 28,
      incrementRange: [400, 450]
    }),
    name: "2"
  },
  [uuid.v4()]: {
    history: buildData({
      yearRange: 2,
      intervals: 15,
      incrementRange: [500, 750]
    }),
    name: "3",
  }
};

// module.exports = (request, response) => {
//   setTimeout(() => {
//     response.status(200).send(payload);
//     // response.status(404).send(payloadOneResult);
//   }, utils.getRandomArbitrary(3000, 5000));
// };

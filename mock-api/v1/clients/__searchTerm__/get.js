const utils = require("../../../utils");

module.exports = (request, response) => {
  setTimeout(() => {
    response.json([
      {
        clientId: 34,
        clientName: "AMI Omega Metapack",
        shortName: "AOM",
        status: "P",
        thirdPartyAccounts: []
      },
      {
        clientId: 81,
        clientName: "Amazon",
        shortName: "AMAZ",
        status: "A",
        clientAccountManager: "Joe Craggs",
        thirdPartyAccounts: []
      },
      {
        clientId: 1067,
        clientName: "Amazon MFN Tier 1 ",
        shortName: "TRR",
        status: "A",
        thirdPartyAccounts: []
      },
      {
        clientId: 1065,
        clientName: "Amazon MFN Tier 2",
        shortName: "VCT",
        status: "A",
        thirdPartyAccounts: []
      },
      {
        clientId: 1173,
        clientName: "Amazon MFN Tier 5",
        shortName: "MNT",
        status: "A",
        thirdPartyAccounts: []
      },
      {
        clientId: 494,
        clientName: "Amazon Returns",
        shortName: "AMR",
        status: "P",
        thirdPartyAccounts: []
      },
      {
        clientId: 475,
        clientName: "American Eagle",
        shortName: "ANE",
        status: "P",
        thirdPartyAccounts: []
      },
      {
        clientId: 311,
        clientName: "American Golf",
        shortName: "AMG",
        status: "A",
        clientAccountManager: "Nick Houghton",
        thirdPartyAccounts: ["Nightline"]
      },
      {
        clientId: 861,
        clientName: "Amethyst",
        shortName: "AME ",
        status: "A",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      },
      {
        clientId: 859,
        clientName: "Ami Omega",
        shortName: "AMI ",
        status: "A",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      },
      {
        clientId: 615,
        clientName: "Ami Omega 2",
        shortName: "ZO11",
        status: "A",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      },
      {
        clientId: 628,
        clientName: "J D Williams & Company Limited",
        shortName: "JDW",
        status: "A",
        childClientName: "AMBROSE WILSON GOLD",
        childClientId: "17",
        clientAccountManager: "Alastair Frobisher",
        thirdPartyAccounts: []
      },
      {
        clientId: 628,
        clientName: "J D Williams & Company Limited",
        shortName: "JDW",
        status: "A",
        childClientName: "AMBROSE WILSON P.L.C.",
        childClientId: "1",
        clientAccountManager: "Alastair Frobisher",
        thirdPartyAccounts: []
      },
      {
        clientId: 34,
        clientName: "AMI Omega Metapack",
        shortName: "AOM",
        status: "P",
        childClientName: "AMG",
        childClientId: "3",
        thirdPartyAccounts: []
      },
      {
        clientId: 859,
        clientName: "Ami Omega",
        shortName: "AMI ",
        status: "A",
        childClientName: "AMG ",
        childClientId: "3",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      },
      {
        clientId: 872,
        clientName: "Kitbag",
        shortName: "KITB",
        status: "A",
        childClientName: "Amazon",
        childClientId: "24",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      },
      {
        clientId: 261,
        clientName: "Specialist Crafts",
        shortName: "SPCR",
        status: "A",
        childClientName: "Amazon",
        childClientId: "5",
        clientAccountManager: "Nick Houghton",
        thirdPartyAccounts: []
      },
      {
        clientId: 872,
        clientName: "Kitbag",
        shortName: "KITB",
        status: "A",
        childClientName: "Amazon Kitbag",
        childClientId: "29",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      },
      {
        clientId: 872,
        clientName: "Kitbag",
        shortName: "KITB",
        status: "A",
        childClientName: "Amazon McLaren",
        childClientId: "30",
        clientAccountManager: "Mike Antwoon",
        thirdPartyAccounts: []
      }
    ]);
  }, utils.getRandomArbitrary(200, 2500));
};

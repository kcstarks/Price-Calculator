export default [
  {
    name: "Private",
    slug: "private",
    mode: {
      ambulatory: {
        load_fee: 35.0,
        underfifty: 3.5,
        underhundred: 4.5,
        overhundred: 5.5,
      },
      wheelchair: {
        load_fee: 55.0,
        underfifty: 3.5,
        underhundred: 4.5,
        overhundred: 5.5,
      },
      stretcher: {
        load_fee: 300.0,
        underfifty: 6.0,
        underhundred: 7.0,
        overhundred: 8.0,
      },
    },
    bari: 100.0,
    oxygen: { one: 25.0, two: 35.0, three: 50.0 },
    weekend_fee: 25.0,
  },

  {
    name: "Contract",
    slug: "contract",
    mode: {
      ambulatory: {
        load_fee: 30.0,
        underfifty: 3.0,
        underhundred: 4.0,
        overhundred: 5.0,
      },
      wheelchair: {
        load_fee: 55.0,
        underfifty: 3.0,
        underhundred: 4.0,
        overhundred: 5.0,
      },
      stretcher: {
        load_fee: 300.0,
        underfifty: 5.0,
        underhundred: 6.0,
        overhundred: 7.0,
      },
    },
    bari: 100.0,
    oxygen: { one: 25.0, two: 35.0, three: 50.0 },
    weekend_fee: 25.0,
  },

  {
    name: "JPS",
    slug: "jps",
    mode: {
      ambulatory: {
        load_fee: 30.0,
        underfifty: 3.0,
        underhundred: 3.0,
        overhundred: 3.0,
      },
      wheelchair: {
        load_fee: 50.0,
        underfifty: 3.0,
        underhundred: 3.0,
        overhundred: 3.0,
      },
      stretcher: {
        load_fee: 200.0,
        underfifty: 5.0,
        underhundred: 5.0,
        overhundred: 5.0,
      },
    },
    bari: 250.0,
    oxygen: { one: 25.0, two: 25.0, three: 25.0 },
    weekend_fee: 25.0,
  },
];

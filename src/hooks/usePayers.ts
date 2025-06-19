import payers from "../data/data";

export interface Payer {
  name: string;
  slug: string;
  mode: {
    taxi: {
      load_fee: float,
      underfifty: float,
    },
    ambulatory: {
      load_fee: float;
      underfifty: float;
      underhundred: float;
      overhundred: float;
    };
    wheelchair: {
      load_fee: float;
      underfifty: float;
      underhundred: float;
      overhundred: float;
    };
    stretcher: {
      load_fee: float;
      underfifty: float;
      underhundred: float;
      overhundred: float;
    };
  };
  bari: float;
  oxygen: {
    one: float;
    two: float;
    three: float;
  };
  weekend_fee: float;
  fuel_surcharge: {
    over_3: float;
    over_4: float;
    over_5: float;
  }
}

const usePayers = () => ({ data: payers });

export default usePayers;

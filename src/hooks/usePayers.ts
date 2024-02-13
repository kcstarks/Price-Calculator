import payers from "../data/data";

export interface Payer {
  name: string;
  slug: string;
  mode: {
    ambulatory: {
      load_fee: number;
      underfifty: number;
      underhundred: number;
      overhundred: number;
    };
    wheelchair: {
      load_fee: number;
      underfifty: number;
      underhundred: number;
      overhundred: number;
    };
    stretcher: {
      load_fee: number;
      underfifty: number;
      underhundred: number;
      overhundred: number;
    };
  };
  bari: number;
  oxygen: {
    one: number;
    two: number;
    three: number;
  };
  weekend_fee: number;
}

const usePayers = () => ({ data: payers });

export default usePayers;

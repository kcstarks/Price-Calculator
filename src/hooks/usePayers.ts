import payers from "../data/data";

export interface Payer {
  name: string;
  slug: string;
  load_fee: {
    wheelchair: number;
    stretcher: number;
  };
  bari: number;
  oxygen: {
    one: number;
    two: number;
    three: number;
  };
}

const usePayers = () => ({ data: payers });

export default usePayers;

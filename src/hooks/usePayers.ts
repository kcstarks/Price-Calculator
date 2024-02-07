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
    "2-4": number;
    "5-7": number;
    "8+": number;
  };
}

const usePayers = () => ({ data: payers });

export default usePayers;

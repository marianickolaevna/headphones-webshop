import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51OfHXbIvfT4X79ZiHhfcpU5RlUm3fTXzjKxL63KpFDji8LCDwBv7YtUiNfTaBbw2T2HBpCx79q6fDhudEtW4NTLY00nCUPuuMT"
    );
  }
  return stripePromise;
};

export default getStripe;

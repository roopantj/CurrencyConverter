export const getCurrencyList = async ({ setLoading, updateCurrency }) => {
  try {
    setLoading(true);
    const response = await fetch(
      "https://free.currconv.com/api/v7/currencies?apiKey=053542bbdf05e8579345"
    );
    const data = await response.json();
    setLoading(false);
    let tmpCurrencyList = [];
    for (const i in data.results) tmpCurrencyList.push(i);
    updateCurrency(tmpCurrencyList);
  } catch (err) {
    throw err;
  }
};
export const getCurrencyValue = async ({ update, to, from }) => {
  const response = await fetch(
    `https://free.currconv.com/api/v7/convert?apiKey=053542bbdf05e8579345&q=${from}_${to}&compact=ultra`
  );
  const data = await response.json();
  update(Object.values(data)[0]);
};

export const convertCurrency = ({ calc, input, value }) => {
  calc(input * value);
};

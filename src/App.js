import React, { useState, useEffect } from "react";
import CurrencyCard from "./Components/CurrencyCard/CurrencyCard";
import {
  getCurrencyList,
  getCurrencyValue,
  convertCurrency,
} from "./Actions/action";
import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";

const App = () => {
  const [currencyList, updateCurrency] = useState([]);
  const [fromCurrency, updateFrom] = useState("ALL");
  const [toCurrency, updateTo] = useState("ALL");
  const [currencyValue, setCurrencyValue] = useState(0);
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrencyList({ setLoading: setLoading, updateCurrency: updateCurrency });
  }, []);

  useEffect(() => {
    getCurrencyValue({
      update: setCurrencyValue,
      from: fromCurrency,
      to: toCurrency,
    });
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    convertCurrency({ calc: setOutput, input: input, value: currencyValue });
  }, [fromCurrency, toCurrency, input, currencyValue]);

  const handleChange = (event) => setInput(event.target.value);

  const exchange = () => {
    const initialFrom = fromCurrency;
    const initialTo = toCurrency;
    updateFrom(initialTo);
    updateTo(initialFrom);
  };
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="currency-input">
          <CurrencyCard
            label="From"
            value={input}
            currencyList={currencyList}
            update={updateFrom}
            isReadOnly={false}
            handleChange={handleChange}
          />
          <CurrencyCard
            label="To"
            value={output}
            currencyList={currencyList}
            update={updateTo}
            isReadOnly={true}
            handleChange={handleChange}
          />
          <button onClick={exchange}>Exchange</button>
        </div>
      )}
    </div>
  );
};

export default App;

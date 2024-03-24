import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    let getExchangeRate = async () => {
      try {
        let url = `https://v6.exchangerate-api.com/v6/502c6b9f4fd1259efd5d6d28/latest/${fromCurrency}`;
        const response = await axios.get(url);
        console.log(response);
        setExchangeRate(response.data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error("Error Fetcing Error Rate :", error);
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };
  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };
  return (
    <>
      <div>
        <div className="currency-converter">
          <div className="box"></div>
          <div className="data">
            <h1>Currency Converter</h1>
            <div className="input-container">
              <label htmlFor="amt">Amount :</label>
              <input
                type="number"
                className="amt"
                id="amt"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="fromCurrency">From Currency :</label>
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
              >
                <option value="AED">AED - Utd. Arab Emir. Dirham</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="CNY">CNY - Chinese Yuan Renminbi</option>
                <option value="GBP">GBP - Great British Pound</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="SEK">SEK - Swedish Krona </option>
                <option value="THB">THB - Thai Bhat</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="EUR">EUR - Euro</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="MYR">MYR - Malaysian Ringgit</option>
                <option value="SAR">SAR - Saudi Riyal</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="USD"> USD - US Dollar</option>{" "}
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="fromCurrency">To Currency :</label>
              <select
                id="toCurrency"
                value={toCurrency}
                onChange={handleToCurrencyChange}
              >
                <option value="AED">AED - Utd. Arab Emir. Dirham</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="CNY">CNY - Chinese Yuan Renminbi</option>
                <option value="GBP">GBP - Great British Pound</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="SEK">SEK - Swedish Krona </option>
                <option value="THB">THB - Thai Bhat</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="EUR">EUR - Euro</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="MYR">MYR - Malaysian Ringgit</option>
                <option value="SAR">SAR - Saudi Riyal</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="USD"> USD - US Dollar</option>
              </select>
            </div>
            <div className="result">
              <p>
                {amount} {fromCurrency} is equal to {convertedAmount}{" "}
                {toCurrency}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

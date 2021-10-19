import React from "react";
import Dropdown from "../Dropdown";
import "./CurrencyCard.css";
const CurrencyCard = ({
  handleChange,
  value,
  label,
  currencyList,
  update,
  isReadOnly,
}) => {
  return (
    <div className="currency-card">
      <h4>{label}</h4>
      <input
        type="number"
        onChange={handleChange}
        value={value}
        readOnly={isReadOnly}
      />
      <div className="dropdown">
        <Dropdown options={currencyList} setCurrency={update} />
      </div>
    </div>
  );
};

export default CurrencyCard;

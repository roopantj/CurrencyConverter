import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Dropdown = ({ options, setCurrency }) => {
  return (
    <div className="dropdown">
      <DropDownList
        defaultItem={options[0]}
        data={options}
        onChange={(e) => setCurrency(e.value)}
      />
    </div>
  );
};

export default Dropdown;

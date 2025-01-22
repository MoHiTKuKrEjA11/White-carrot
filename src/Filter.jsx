import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onFilter(selectedDate);
  };

  return (
    <div>
      <label htmlFor="date-filter">Filter by Date: </label>
      <input
        type="date"
        id="date-filter"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Filter;

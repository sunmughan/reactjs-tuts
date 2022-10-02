import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div>
        <h2>Basic Datepicker</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
        />
      </div>
      <div>
        <h2>Datepicker With Different format</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          dateFormat="yyyy/MM/dd"
        />
      </div>
      <div>
        <h2>Datepicker Min Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          minDate={new Date()}
        />
      </div>
      <div>
        <h2>Datepicker Max Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          maxDate={new Date()}
        />
      </div>
      <div>
        <h2>Datepicker Show Week Days Only</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        />
      </div>
      <div>
        <h2>Datepicker With Clear Functionality</h2>
        <div style={{ display: "inline-block" }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            isClearable
          />
        </div>
      </div>
      <div>
        <h2>Datepicker With Scrollble year</h2>
        <div style={{ display: "inline-block" }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
      </div>
    </>
  );
};

export default ReactDatepicker;

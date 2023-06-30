import React from "react";
import { Stack} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const DateSelector= () => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate)
  return (
    <Stack spacing sx={{ width: "250px", borderRadius: '50%'  }}  >
      <DatePicker
        label="Date Picker"
        slotProps={{ textField: { variant: 'outlined' } }}
        value={selectedDate}
        onChange={(newValue)=>{
          setSelectedDate(newValue)
        }} 
        
      />
    </Stack>
  );
};

export default DateSelector;

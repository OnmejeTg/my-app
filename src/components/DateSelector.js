import React from "react";
import { Stack} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";


const DateSelector= ({text}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate)
  return (
    <Stack spacing sx={{ width: "400px", borderRadius: '50%'  }}  >
      <DatePicker
        label={text}
        slotProps={{ textField: { variant: 'outlined' } }}
        value={selectedDate}
        onChange={(newValue)=>{
        setSelectedDate(newValue)
        }} 
        format="DD/MM/YYYY"
        
      />
    </Stack>
  );
};

export default DateSelector;

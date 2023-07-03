import React from "react";
import { Stack} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";


const DateSelector= ({text, selectedDate}) => {
  // const [selectedDate, setSelectedDate] = useState(null);
  console.log(text)

  return (
    <Stack spacing sx={{ width: "400px", borderRadius: '50%'  }}  >
      <DatePicker
        label={text}
        slotProps={{ textField: { variant: 'outlined' } }}
        value={selectedDate}
        // onChange={(x)=>{
        // setSelectedDate(x)
        // }} 
        format="DD/MM/YYYY"
        
      />
    </Stack>
  );
};

export default DateSelector;

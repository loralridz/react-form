import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";

interface OptionProp {
  field: any;
  fieldChanged: any;
  value?: string;
  label: string;
}
const OptionField = (props: OptionProp) => {
  const { field, fieldChanged, value, label } = props;
  
  return (
<Grid item xs={12} sm={12}>
       <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label="gender"
          // defaultValue="female"
          name="radio-buttons-group"
          onChange={e=>fieldChanged(field[0],(e.target as HTMLInputElement).value)}
        >
          {field[1].options.map((option: any) => {
            return (
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default OptionField;

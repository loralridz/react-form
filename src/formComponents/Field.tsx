import React from "react";
import { Grid, InputLabel, TextField } from "@mui/material";

interface FieldProp {
  field: any;
  fieldChanged: any;
  type?: any;
  value?: any;
  label: string;
  multiline?: boolean;
}
const Field = (props: FieldProp) => {
  const { field, label, fieldChanged, type, value, multiline } = props;
  return (
    <Grid item xs={12} sm={12} key={field[0]}>
      <InputLabel> {label} </InputLabel>
      <TextField
        multiline={multiline}
        id={field[0]}
        hiddenLabel
        variant="outlined"
        onChange={e=>fieldChanged(field[0],e.target.value)}
      />
    </Grid>
  );
};

export default Field;

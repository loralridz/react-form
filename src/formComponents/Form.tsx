import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Field from "./Field";
import OptionField from "./OptionField";
interface FormProps {
  formData: any;
}
export const Form = (props: FormProps) => {
  const { formData } = props;
  const [values, setValues] = useState<any>({});
  const [dummy, setdummy] = useState(false)
  const fieldMeetsCondition = (field: {
    conditions: { if: { source: any }[] }[];
    conditional: { field: string; value: any };
  }) => {
      console.log("here");
      
    // "conditions": [
    //     {
    //       "if": [
    //         {
    //           "source": "fields.eaa25858-9e3c-4a9b-9b00-a91c6eeb5c95",
    //           "sourceProperty": "value",
    //           "comparison": "equals",
    //           "target": "no",
    //           "targetProperty": "value"
    //         }
    //       ],
    // @ts-ignore
    const condition = field[1]?.conditions[0]?.if[0];
    // @ts-ignore
    if (condition?.source) {
      const source = condition.source.slice(7);
      console.log(source, values[source] === condition.target);
      console.log(values["eaa25858-9e3c-4a9b-9b00-a91c6eeb5c95"]);
      return values[source] === condition.target;
    }
    return true;
  };
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => 
// @ts-ignore
  updateState({}), []);
 
 
    // useEffect(() => {
    //   forceUpdate();
    // }, [values])

  const fieldChanged = (fieldId: string | number, value: any) => {
    // use a callback to find the field in the value list and update it
    setValues((currentValues: { [x: string]: any }) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
    forceUpdate();

    console.log(values);
    // forceUpdate()
  };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // todo - send data somewhere
  };
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        {Object.entries(formData.fields)
          .filter((field: any) => fieldMeetsCondition(field))
          .map((field: any) => {
            switch (field[1].tag) {
              case "input":
                // attrs.tag->radio
                return (
                  <OptionField
                    key={field[0]}
                    field={field}
                    fieldChanged={fieldChanged}
                    value={values[field[0]]}
                    label={field[1].config.label}
                  />
                );
              case "textarea":
                return (
                  <Field
                    key={field[0]}
                    label={field[1].config.label}
                    field={field}
                    fieldChanged={fieldChanged}
                    value={values[field[0]]}
                    multiline={true}
                  />
                );
              case "button":
                return (
                  <Grid item xs={12} sm={12} key={field[0]}>
                    <Button variant="outlined">
                      {field[1].options[0].label}
                    </Button>
                  </Grid>
                );
            }
          })}
      </Grid>
    </form>
  );
};

import React from "react";
import { useFormikContext } from "formik";
import { TextField } from "@mui/material";
import "./customTextField.scss";

const CustomTextField = (props) => {
  const { values, touched, errors, setFieldValue, setFieldTouched } =
    useFormikContext();

  return (
    <>
      <TextField
        id={props.name}
        name={props.name}
        variant="standard"
        label={props.label}
        className="inputProps"
        value={values[props.name]}
        disabled={props.disabled}
        onChange={(e) => setFieldValue(e.target.name, e.target.value)}
        onBlur={(e) => setFieldTouched(e.target.name, true, true)}
        error={touched[props.name] && errors[props.name]}
        helperText={touched[props.name]  && errors[props.name]}
      />
    </>
  );
};

export default React.memo(CustomTextField);

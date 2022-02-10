import { Grid, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import CustomTextField from "../common/CustomTextField/customTextField";

const TotalAmount = () => {
  const { values, setFieldValue } = useFormikContext();

  let sum = values.items.reduce(
    (previous, current) => {
      const prev = !previous ? 0 : parseInt(previous);
      const curr = !current.price.amount ? 0 : parseInt(current.price.amount);
      return prev + curr;
    },

    0
  );

  useEffect(() => {
    setFieldValue("amount", sum);
  }, [values.items, sum, setFieldValue]);

  return (
    <>
      <div className="labels">Total Amount</div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            id="amount"
            name="amount"
            variant="standard"
            label="Amount"
            value={isNaN(sum) ? 0 : sum}
            disabled={true}
            className="inputProps"
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField name="currency" label="Currency" disabled />
        </Grid>
      </Grid>
    </>
  );
};

export default TotalAmount;

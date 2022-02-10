import React from "react";
import "./consumer.scss";
import CustomTextField from "../common/CustomTextField/customTextField";
import { Grid } from "@mui/material";

const Consumer = () => {
  return (
    <div className="consumer">
      <div className="labels">Consumer</div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <CustomTextField name="givenNames" label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField name="surname" label="Last Name" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Consumer;

import { Grid } from "@mui/material";
import React from "react";
import CustomTextField from "../common/CustomTextField/customTextField";

const Shipping = () => {
  return (
    <>
    <div className="labels">Shipping</div>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <CustomTextField name="countryCode" label="Country Code" />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField name="name" label="Name" />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField name="postCode" label="Post Code" />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField name="suburb" label="Suburb" />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField name="line1" label="Address" />
      </Grid>
    </Grid>
    </>
  );
};

export default Shipping;

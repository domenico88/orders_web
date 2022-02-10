import { Button, Grid } from "@mui/material";
import { FieldArray, useFormikContext } from "formik";
import React from "react";

import { TextField } from "@mui/material";

const Items = () => {
  const {
    values: { items },
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();

  return (
    <div className="shipping">
      <FieldArray name="items">
        {({ insert, remove, push }) => (
          <div>
            <div className="labels">
              Items{" "}
              <Button
                type="button"
                variant="contained"
                style={{float:"right"}}
                className="secondary"
                onClick={() =>
                  push({
                    quantity: "",
                    price: "",
                    name: "",
                    category: "",
                    sku: "",
                  })
                }
              >
                Add Item
              </Button>
            </div>
            {items.length > 0 &&
              items.map((item, index) => {
                const errorCondition =
                  touched.items &&
                  errors.items &&
                  touched.items[index] &&
                  errors.items[index] &&
                  touched.items[index].price &&
                  errors.items[index].price;

                return (
                  <div key={index}>
                    <>
                      <div className="sublabels">{`item ${index}`}</div>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <TextField
                            id={`items.${index}.quantity`}
                            name={`items.${index}.quantity`}
                            variant="standard"
                            label="Quantity"
                            className="inputProps"
                            value={items[`items.${index}.quantity`]}
                            onChange={(e) =>
                              setFieldValue(e.target.name, e.target.value)
                            }
                            onBlur={(e) =>
                              setFieldTouched(e.target.name, true, true)
                            }
                            error={
                              errorCondition &&
                              touched.items[index].quantity &&
                              errors.items[index].quantity
                            }
                            helperText={
                              errorCondition &&
                              touched.items[index].quantity &&
                              errors.items[index].quantity
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id={`items.${index}.price.amount`}
                            name={`items.${index}.price.amount`}
                            variant="standard"
                            label="Price"
                            className="inputProps"
                            value={items[`items.${index}.price.amount`]}
                            onChange={(e) =>
                              setFieldValue(e.target.name, e.target.value)
                            }
                            onBlur={(e) =>
                              setFieldTouched(e.target.name, true, true)
                            }
                            error={
                              errorCondition &&
                              touched.items[index].price.amount &&
                              errors.items[index].price.amount
                            }
                            helperText={
                              errorCondition &&
                              touched.items[index].price.amount &&
                              errors.items[index].price.amount
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id={`items.${index}.name`}
                            name={`items.${index}.name`}
                            variant="standard"
                            label="Name"
                            className="inputProps"
                            value={items[`items.${index}.name`]}
                            onChange={(e) =>
                              setFieldValue(e.target.name, e.target.value)
                            }
                            onBlur={(e) =>
                              setFieldTouched(e.target.name, true, true)
                            }
                            error={
                              errorCondition &&
                              touched.items[index].name &&
                              errors.items[index].name
                            }
                            helperText={
                              errorCondition &&
                              touched.items[index].name &&
                              errors.items[index].name
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id={`items.${index}.category`}
                            name={`items.${index}.category`}
                            variant="standard"
                            label="Category"
                            className="inputProps"
                            value={items[`items.${index}.category`]}
                            onChange={(e) =>
                              setFieldValue(e.target.name, e.target.value)
                            }
                            onBlur={(e) =>
                              setFieldTouched(e.target.name, true, true)
                            }
                            error={
                              errorCondition &&
                              touched.items[index].category &&
                              errors.items[index].category
                            }
                            helperText={
                              errorCondition &&
                              touched.items[index].category &&
                              errors.items[index].category
                            }
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id={`items.${index}.sku`}
                            name={`items.${index}.sku`}
                            variant="standard"
                            label="Sku"
                            className="inputProps"
                            value={items[`items.${index}.sku`]}
                            onChange={(e) =>
                              setFieldValue(e.target.name, e.target.value)
                            }
                            onBlur={(e) =>
                              setFieldTouched(e.target.name, true, true)
                            }
                            error={
                              errorCondition &&
                              touched.items[index].sku &&
                              errors.items[index].sku
                            }
                            helperText={
                              errorCondition &&
                              touched.items[index].sku &&
                              errors.items[index].sku
                            }
                          />
                        </Grid>
                      </Grid>
                    </>
                  </div>
                );
              })}
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default Items;

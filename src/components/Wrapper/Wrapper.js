import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Consumer from "../Consumer/Consumer";
import Shipping from "../Shipping/Shipping";
import { Button } from "@mui/material";
import Items from "../Items/Items";
import TotalAmount from "../TotalAmount/TotalAmount";
import axios from "axios";

const Wrapper = () => {
  return (
    <Formik
      initialValues={{
        givenNames: "",
        surname: "",
        countryCode: "",
        name: "",
        postCode: "",
        suburb: "",
        line1: "",
        items: [
          {
            quantity: "",
            price: { amount: "", currency: "EUR" },
            name: "",
            category: "",
            sku: "",
          },
        ],
        merchant: {
          redirectConfirmUrl: "https://portal.staging.scalapay.com/success-url",
          redirectCancelUrl: "https://portal.staging.scalapay.com/failure-url",
        },

        amount: 0,
        currency: "EUR",
      }}
      validationSchema={Yup.object().shape({
        givenNames: Yup.string().max(15).required("Required"),
        surname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        countryCode: Yup.string()
          .test((v) => v && v.length === 2)
          .required("Required"),
        postCode: Yup.string()
          .min(5, "Must be between 5 and 7")
          .max(7, "Must be between 5 and 7")
          .required("Required"),
        name: Yup.string().required("Required"),

        suburb: Yup.string().required("Required"),
        line1: Yup.string().required("Required"),
        items: Yup.array().of(
          Yup.object().shape({
            quantity: Yup.string().required("Required"),
            price: Yup.object().shape({
              amount: Yup.string().required("Required"),
            }),
            category: Yup.string().required("Required"),
            name: Yup.string().required("Required"),
            sku: Yup.string().required("Required"),
          })
        ),
      })}
      onSubmit={(values) => {
        const url = "v2/orders";
        const options = {
          method: "POST",
          url: url,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer qhtfs87hjnc12kkos",
          },
          data: {
            consumer: {
              givenNames: values.givenNames,
              surname: values.surname,
            },
            shipping: {
              countryCode: values.countryCode,
              name: values.name,
              postcode: values.postcode,
              line1: values.line1,
            },
            items: values.items,
            merchant: values.merchant,
            totalAmount: {
              amount: values.amount.toString(),
              currency: values.currency,
            },
          },
        };
        axios
          .request(options)
          .then(function (response) {
            window.location.href = response.data.checkoutUrl;
          })
          .catch(function (error) {
            console.error(error);
          });
      }}
    >
      <Form>
        <Consumer />
        <Shipping />
        <Items />
        <TotalAmount />
        <Button
          type="submit"
          variant="contained"
          style={{ float: "right", marginTop: "40px" }}
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default Wrapper;

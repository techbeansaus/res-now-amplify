/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RESERVATIONS } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RESERVATIONSCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    bookingDate: "",
    bookingTime: "",
    numberOfGuests: "",
    specialRequests: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [bookingDate, setBookingDate] = React.useState(
    initialValues.bookingDate
  );
  const [bookingTime, setBookingTime] = React.useState(
    initialValues.bookingTime
  );
  const [numberOfGuests, setNumberOfGuests] = React.useState(
    initialValues.numberOfGuests
  );
  const [specialRequests, setSpecialRequests] = React.useState(
    initialValues.specialRequests
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setBookingDate(initialValues.bookingDate);
    setBookingTime(initialValues.bookingTime);
    setNumberOfGuests(initialValues.numberOfGuests);
    setSpecialRequests(initialValues.specialRequests);
    setErrors({});
  };
  const validations = {
    name: [],
    phone: [{ type: "Required" }, { type: "Phone" }],
    email: [{ type: "Email" }],
    bookingDate: [{ type: "Required" }],
    bookingTime: [{ type: "Required" }],
    numberOfGuests: [{ type: "Required" }],
    specialRequests: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          phone,
          email,
          bookingDate,
          bookingTime,
          numberOfGuests,
          specialRequests,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new RESERVATIONS(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RESERVATIONSCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone,
              email,
              bookingDate,
              bookingTime,
              numberOfGuests,
              specialRequests,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Phone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="Enter your contact number"
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone: value,
              email,
              bookingDate,
              bookingTime,
              numberOfGuests,
              specialRequests,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email: value,
              bookingDate,
              bookingTime,
              numberOfGuests,
              specialRequests,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Booking date</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={bookingDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              bookingDate: value,
              bookingTime,
              numberOfGuests,
              specialRequests,
            };
            const result = onChange(modelFields);
            value = result?.bookingDate ?? value;
          }
          if (errors.bookingDate?.hasError) {
            runValidationTasks("bookingDate", value);
          }
          setBookingDate(value);
        }}
        onBlur={() => runValidationTasks("bookingDate", bookingDate)}
        errorMessage={errors.bookingDate?.errorMessage}
        hasError={errors.bookingDate?.hasError}
        {...getOverrideProps(overrides, "bookingDate")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Booking time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={bookingTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              bookingDate,
              bookingTime: value,
              numberOfGuests,
              specialRequests,
            };
            const result = onChange(modelFields);
            value = result?.bookingTime ?? value;
          }
          if (errors.bookingTime?.hasError) {
            runValidationTasks("bookingTime", value);
          }
          setBookingTime(value);
        }}
        onBlur={() => runValidationTasks("bookingTime", bookingTime)}
        errorMessage={errors.bookingTime?.errorMessage}
        hasError={errors.bookingTime?.hasError}
        {...getOverrideProps(overrides, "bookingTime")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Number of guests</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="Guest count"
        type="number"
        step="any"
        value={numberOfGuests}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              bookingDate,
              bookingTime,
              numberOfGuests: value,
              specialRequests,
            };
            const result = onChange(modelFields);
            value = result?.numberOfGuests ?? value;
          }
          if (errors.numberOfGuests?.hasError) {
            runValidationTasks("numberOfGuests", value);
          }
          setNumberOfGuests(value);
        }}
        onBlur={() => runValidationTasks("numberOfGuests", numberOfGuests)}
        errorMessage={errors.numberOfGuests?.errorMessage}
        hasError={errors.numberOfGuests?.hasError}
        {...getOverrideProps(overrides, "numberOfGuests")}
      ></TextField>
      <TextField
        label="Special requests"
        isRequired={false}
        isReadOnly={false}
        placeholder="Message"
        value={specialRequests}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              bookingDate,
              bookingTime,
              numberOfGuests,
              specialRequests: value,
            };
            const result = onChange(modelFields);
            value = result?.specialRequests ?? value;
          }
          if (errors.specialRequests?.hasError) {
            runValidationTasks("specialRequests", value);
          }
          setSpecialRequests(value);
        }}
        onBlur={() => runValidationTasks("specialRequests", specialRequests)}
        errorMessage={errors.specialRequests?.errorMessage}
        hasError={errors.specialRequests?.hasError}
        {...getOverrideProps(overrides, "specialRequests")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RESERVATIONSCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    bookingDate?: string;
    bookingTime?: string;
    numberOfGuests?: number;
    specialRequests?: string;
};
export declare type RESERVATIONSCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bookingDate?: ValidationFunction<string>;
    bookingTime?: ValidationFunction<string>;
    numberOfGuests?: ValidationFunction<number>;
    specialRequests?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RESERVATIONSCreateFormOverridesProps = {
    RESERVATIONSCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bookingDate?: PrimitiveOverrideProps<TextFieldProps>;
    bookingTime?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfGuests?: PrimitiveOverrideProps<TextFieldProps>;
    specialRequests?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RESERVATIONSCreateFormProps = React.PropsWithChildren<{
    overrides?: RESERVATIONSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RESERVATIONSCreateFormInputValues) => RESERVATIONSCreateFormInputValues;
    onSuccess?: (fields: RESERVATIONSCreateFormInputValues) => void;
    onError?: (fields: RESERVATIONSCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RESERVATIONSCreateFormInputValues) => RESERVATIONSCreateFormInputValues;
    onValidate?: RESERVATIONSCreateFormValidationValues;
} & React.CSSProperties>;
export default function RESERVATIONSCreateForm(props: RESERVATIONSCreateFormProps): React.ReactElement;

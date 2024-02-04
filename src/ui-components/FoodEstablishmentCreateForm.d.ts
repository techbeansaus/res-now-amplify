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
export declare type FoodEstablishmentCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
};
export declare type FoodEstablishmentCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodEstablishmentCreateFormOverridesProps = {
    FoodEstablishmentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodEstablishmentCreateFormProps = React.PropsWithChildren<{
    overrides?: FoodEstablishmentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FoodEstablishmentCreateFormInputValues) => FoodEstablishmentCreateFormInputValues;
    onSuccess?: (fields: FoodEstablishmentCreateFormInputValues) => void;
    onError?: (fields: FoodEstablishmentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodEstablishmentCreateFormInputValues) => FoodEstablishmentCreateFormInputValues;
    onValidate?: FoodEstablishmentCreateFormValidationValues;
} & React.CSSProperties>;
export default function FoodEstablishmentCreateForm(props: FoodEstablishmentCreateFormProps): React.ReactElement;

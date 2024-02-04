/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FoodEstablishment } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodEstablishmentUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
};
export declare type FoodEstablishmentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodEstablishmentUpdateFormOverridesProps = {
    FoodEstablishmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodEstablishmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: FoodEstablishmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    foodEstablishment?: FoodEstablishment;
    onSubmit?: (fields: FoodEstablishmentUpdateFormInputValues) => FoodEstablishmentUpdateFormInputValues;
    onSuccess?: (fields: FoodEstablishmentUpdateFormInputValues) => void;
    onError?: (fields: FoodEstablishmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodEstablishmentUpdateFormInputValues) => FoodEstablishmentUpdateFormInputValues;
    onValidate?: FoodEstablishmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FoodEstablishmentUpdateForm(props: FoodEstablishmentUpdateFormProps): React.ReactElement;

import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerFoodService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly foodestablishmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly foodestablishmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodService = LazyLoading extends LazyLoadingDisabled ? EagerFoodService : LazyFoodService

export declare const FoodService: (new (init: ModelInit<FoodService>) => FoodService) & {
  copyOf(source: FoodService, mutator: (draft: MutableModel<FoodService>) => MutableModel<FoodService> | void): FoodService;
}

type EagerFoodEstablishment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodEstablishment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: string | null;
  readonly RESERVATIONS?: (RESERVATIONS | null)[] | null;
  readonly FoodServices?: (FoodService | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodEstablishment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodEstablishment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly address?: string | null;
  readonly RESERVATIONS: AsyncCollection<RESERVATIONS>;
  readonly FoodServices: AsyncCollection<FoodService>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodEstablishment = LazyLoading extends LazyLoadingDisabled ? EagerFoodEstablishment : LazyFoodEstablishment

export declare const FoodEstablishment: (new (init: ModelInit<FoodEstablishment>) => FoodEstablishment) & {
  copyOf(source: FoodEstablishment, mutator: (draft: MutableModel<FoodEstablishment>) => MutableModel<FoodEstablishment> | void): FoodEstablishment;
}

type EagerRESERVATIONS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESERVATIONS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly bookingDate?: string | null;
  readonly bookingTime?: string | null;
  readonly numberOfGuests?: number | null;
  readonly specialRequests?: string | null;
  readonly foodestablishmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRESERVATIONS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESERVATIONS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly bookingDate?: string | null;
  readonly bookingTime?: string | null;
  readonly numberOfGuests?: number | null;
  readonly specialRequests?: string | null;
  readonly foodestablishmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RESERVATIONS = LazyLoading extends LazyLoadingDisabled ? EagerRESERVATIONS : LazyRESERVATIONS

export declare const RESERVATIONS: (new (init: ModelInit<RESERVATIONS>) => RESERVATIONS) & {
  copyOf(source: RESERVATIONS, mutator: (draft: MutableModel<RESERVATIONS>) => MutableModel<RESERVATIONS> | void): RESERVATIONS;
}
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FoodService, FoodEstablishment, RESERVATIONS } = initSchema(schema);

export {
  FoodService,
  FoodEstablishment,
  RESERVATIONS
};
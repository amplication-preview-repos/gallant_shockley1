import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HrInitiativeListRelationFilter } from "../hrInitiative/HrInitiativeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BudgetWhereInput = {
  amount?: FloatNullableFilter;
  department?: StringNullableFilter;
  hrInitiatives?: HrInitiativeListRelationFilter;
  id?: StringFilter;
  year?: IntNullableFilter;
};

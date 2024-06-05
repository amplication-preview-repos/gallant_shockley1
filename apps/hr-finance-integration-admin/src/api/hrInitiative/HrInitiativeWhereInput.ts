import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HrInitiativeWhereInput = {
  budget?: BudgetWhereUniqueInput;
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeBenefitsWhereInput = {
  benefitType?: StringNullableFilter;
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  employeeName?: StringNullableFilter;
  id?: StringFilter;
};

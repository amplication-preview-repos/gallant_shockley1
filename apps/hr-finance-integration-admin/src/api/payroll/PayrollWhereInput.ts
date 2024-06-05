import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PayrollWhereInput = {
  amount?: FloatNullableFilter;
  employeeName?: StringNullableFilter;
  id?: StringFilter;
  paidDate?: DateTimeNullableFilter;
};

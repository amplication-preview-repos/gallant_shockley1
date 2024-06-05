import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  employeeName?: SortOrder;
  id?: SortOrder;
  paidDate?: SortOrder;
  updatedAt?: SortOrder;
};

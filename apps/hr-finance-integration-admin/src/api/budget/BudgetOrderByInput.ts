import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  department?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type EmployeeBenefitsOrderByInput = {
  benefitType?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  employeeName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

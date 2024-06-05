import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";

export type HrInitiativeCreateInput = {
  budget?: BudgetWhereUniqueInput | null;
  cost?: number | null;
  description?: string | null;
  name?: string | null;
};

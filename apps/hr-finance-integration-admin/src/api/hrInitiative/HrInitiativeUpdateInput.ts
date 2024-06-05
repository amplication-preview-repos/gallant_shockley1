import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";

export type HrInitiativeUpdateInput = {
  budget?: BudgetWhereUniqueInput | null;
  cost?: number | null;
  description?: string | null;
  name?: string | null;
};

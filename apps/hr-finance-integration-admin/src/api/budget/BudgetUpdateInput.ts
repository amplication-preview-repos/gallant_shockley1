import { HrInitiativeUpdateManyWithoutBudgetsInput } from "./HrInitiativeUpdateManyWithoutBudgetsInput";

export type BudgetUpdateInput = {
  amount?: number | null;
  department?: string | null;
  hrInitiatives?: HrInitiativeUpdateManyWithoutBudgetsInput;
  year?: number | null;
};

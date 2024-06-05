import { HrInitiativeCreateNestedManyWithoutBudgetsInput } from "./HrInitiativeCreateNestedManyWithoutBudgetsInput";

export type BudgetCreateInput = {
  amount?: number | null;
  department?: string | null;
  hrInitiatives?: HrInitiativeCreateNestedManyWithoutBudgetsInput;
  year?: number | null;
};

import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "department";

export const BudgetTitle = (record: TBudget): string => {
  return record.department?.toString() || String(record.id);
};

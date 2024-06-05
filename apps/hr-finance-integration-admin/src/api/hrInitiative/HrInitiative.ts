import { Budget } from "../budget/Budget";

export type HrInitiative = {
  budget?: Budget | null;
  cost: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};

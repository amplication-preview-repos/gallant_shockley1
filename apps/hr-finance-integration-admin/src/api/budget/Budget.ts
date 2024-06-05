import { HrInitiative } from "../hrInitiative/HrInitiative";

export type Budget = {
  amount: number | null;
  createdAt: Date;
  department: string | null;
  hrInitiatives?: Array<HrInitiative>;
  id: string;
  updatedAt: Date;
  year: number | null;
};

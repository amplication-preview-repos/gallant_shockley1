import { Payroll as TPayroll } from "../api/payroll/Payroll";

export const PAYROLL_TITLE_FIELD = "employeeName";

export const PayrollTitle = (record: TPayroll): string => {
  return record.employeeName?.toString() || String(record.id);
};

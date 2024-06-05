import { EmployeeBenefits as TEmployeeBenefits } from "../api/employeeBenefits/EmployeeBenefits";

export const EMPLOYEEBENEFITS_TITLE_FIELD = "employeeName";

export const EmployeeBenefitsTitle = (record: TEmployeeBenefits): string => {
  return record.employeeName?.toString() || String(record.id);
};

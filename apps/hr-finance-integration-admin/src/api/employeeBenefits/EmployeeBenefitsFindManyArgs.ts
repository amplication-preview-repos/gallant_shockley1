import { EmployeeBenefitsWhereInput } from "./EmployeeBenefitsWhereInput";
import { EmployeeBenefitsOrderByInput } from "./EmployeeBenefitsOrderByInput";

export type EmployeeBenefitsFindManyArgs = {
  where?: EmployeeBenefitsWhereInput;
  orderBy?: Array<EmployeeBenefitsOrderByInput>;
  skip?: number;
  take?: number;
};

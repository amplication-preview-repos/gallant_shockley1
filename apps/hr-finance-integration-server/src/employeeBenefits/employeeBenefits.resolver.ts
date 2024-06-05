import * as graphql from "@nestjs/graphql";
import { EmployeeBenefitsResolverBase } from "./base/employeeBenefits.resolver.base";
import { EmployeeBenefits } from "./base/EmployeeBenefits";
import { EmployeeBenefitsService } from "./employeeBenefits.service";

@graphql.Resolver(() => EmployeeBenefits)
export class EmployeeBenefitsResolver extends EmployeeBenefitsResolverBase {
  constructor(protected readonly service: EmployeeBenefitsService) {
    super(service);
  }
}

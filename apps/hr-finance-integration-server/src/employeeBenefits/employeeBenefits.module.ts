import { Module } from "@nestjs/common";
import { EmployeeBenefitsModuleBase } from "./base/employeeBenefits.module.base";
import { EmployeeBenefitsService } from "./employeeBenefits.service";
import { EmployeeBenefitsController } from "./employeeBenefits.controller";
import { EmployeeBenefitsResolver } from "./employeeBenefits.resolver";

@Module({
  imports: [EmployeeBenefitsModuleBase],
  controllers: [EmployeeBenefitsController],
  providers: [EmployeeBenefitsService, EmployeeBenefitsResolver],
  exports: [EmployeeBenefitsService],
})
export class EmployeeBenefitsModule {}

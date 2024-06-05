import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeBenefitsService } from "./employeeBenefits.service";
import { EmployeeBenefitsControllerBase } from "./base/employeeBenefits.controller.base";

@swagger.ApiTags("employeeBenefits")
@common.Controller("employeeBenefits")
export class EmployeeBenefitsController extends EmployeeBenefitsControllerBase {
  constructor(protected readonly service: EmployeeBenefitsService) {
    super(service);
  }
}

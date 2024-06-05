import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HrInitiativeService } from "./hrInitiative.service";
import { HrInitiativeControllerBase } from "./base/hrInitiative.controller.base";

@swagger.ApiTags("hrInitiatives")
@common.Controller("hrInitiatives")
export class HrInitiativeController extends HrInitiativeControllerBase {
  constructor(protected readonly service: HrInitiativeService) {
    super(service);
  }
}

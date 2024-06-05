import { Module } from "@nestjs/common";
import { HrInitiativeModuleBase } from "./base/hrInitiative.module.base";
import { HrInitiativeService } from "./hrInitiative.service";
import { HrInitiativeController } from "./hrInitiative.controller";
import { HrInitiativeResolver } from "./hrInitiative.resolver";

@Module({
  imports: [HrInitiativeModuleBase],
  controllers: [HrInitiativeController],
  providers: [HrInitiativeService, HrInitiativeResolver],
  exports: [HrInitiativeService],
})
export class HrInitiativeModule {}

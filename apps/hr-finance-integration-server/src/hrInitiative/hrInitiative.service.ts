import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HrInitiativeServiceBase } from "./base/hrInitiative.service.base";

@Injectable()
export class HrInitiativeService extends HrInitiativeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

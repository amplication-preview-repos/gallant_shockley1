import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeBenefitsServiceBase } from "./base/employeeBenefits.service.base";

@Injectable()
export class EmployeeBenefitsService extends EmployeeBenefitsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

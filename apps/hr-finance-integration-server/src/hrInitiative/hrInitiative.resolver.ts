import * as graphql from "@nestjs/graphql";
import { HrInitiativeResolverBase } from "./base/hrInitiative.resolver.base";
import { HrInitiative } from "./base/HrInitiative";
import { HrInitiativeService } from "./hrInitiative.service";

@graphql.Resolver(() => HrInitiative)
export class HrInitiativeResolver extends HrInitiativeResolverBase {
  constructor(protected readonly service: HrInitiativeService) {
    super(service);
  }
}

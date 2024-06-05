/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HrInitiativeWhereInput } from "./HrInitiativeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HrInitiativeOrderByInput } from "./HrInitiativeOrderByInput";

@ArgsType()
class HrInitiativeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HrInitiativeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HrInitiativeWhereInput, { nullable: true })
  @Type(() => HrInitiativeWhereInput)
  where?: HrInitiativeWhereInput;

  @ApiProperty({
    required: false,
    type: [HrInitiativeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HrInitiativeOrderByInput], { nullable: true })
  @Type(() => HrInitiativeOrderByInput)
  orderBy?: Array<HrInitiativeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HrInitiativeFindManyArgs as HrInitiativeFindManyArgs };

import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  page: number = 0;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  size: number = 10;
}
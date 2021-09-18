import { Resolver, Query, ObjectType, Field } from "type-graphql";
import { User } from "./entity/User";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hi() {
    return "hello world!";
  }

  @Query(() => [User])
  users() {
    return User.find();
  }
}

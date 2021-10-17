import {
	Resolver,
	Query,
	ObjectType,
	Field,
	Mutation,
	Arg,
} from 'type-graphql';
import { hash } from 'bcryptjs';
import { User } from './entity/User';

@Resolver()
export class UserResolver {
	@Query(() => String)
	hi() {
		return 'hello world!';
	}

	@Query(() => [User])
	users() {
		return User.find();
	}

	@Mutation(() => Boolean)
	async register(
		@Arg('email') email: string,
		@Arg('password') password: string,
	) {
		const hashedPassword = await hash(password, 12);

		try {
			await User.insert({
				email,
				password: hashedPassword,
			});
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}

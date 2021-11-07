import {
	Resolver,
	Query,
	ObjectType,
	Field,
	Mutation,
	Arg,
	Ctx,
	UseMiddleware,
	Int,
} from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from '../entity/User';
import { MyContext } from '../interface/MyContext';
import { createAccessToken, createRefreshToken } from '../auth/auth';
import { isAuth } from '../middleware/isAuth';
import { getConnection } from 'typeorm';

@ObjectType()
class LoginResponse {
	@Field()
	accessToken: string;
}

@Resolver()
export class UserResolver {
	@Query(() => String)
	hi() {
		return 'hello world!';
	}

	@Query(() => String)
	@UseMiddleware(isAuth)
	bye(@Ctx() { payload }: MyContext) {
		console.log(payload);
		return `your user id is: ${payload!.userId}`;
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
		const hashedPassword = await hash(
			password,
			Number(process.env.MAGIC_NUMBER),
		);

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

	@Mutation(() => Boolean)
	async revokeRefreshTokenForUser(@Arg('userId', () => Int) userId: number) {
		await getConnection()
			.getRepository(User)
			.increment({ id: userId }, 'tokenVersion', 1);

		return true;
	}

	@Mutation(() => LoginResponse)
	async login(
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Ctx() { res }: MyContext,
	): Promise<LoginResponse> {
		const user = await User.findOne({ where: { email } });

		if (!user) {
			throw new Error('could not find user');
		}

		const valid = await compare(password, user.password);

		if (!valid) {
			throw new Error('wrong password');
		}

		res.cookie('jid', createRefreshToken(user), {
			httpOnly: true,
		});

		return {
			accessToken: createAccessToken(user),
		};
	}
}

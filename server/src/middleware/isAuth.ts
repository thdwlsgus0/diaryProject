import { MiddlewareFn } from 'type-graphql/dist/interfaces';
import { MyContext } from '../interface/MyContext';
import { verify } from 'jsonwebtoken';

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
	const authorization = context.req.headers['authorization'];
	context.req.headers;
	if (!authorization) {
		throw new Error('not authenticatied');
	}

	try {
		const token = authorization.split(' ')[1];

		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
		context.payload = payload as any;
	} catch (err) {
		console.log(err);
	}

	return next();
};

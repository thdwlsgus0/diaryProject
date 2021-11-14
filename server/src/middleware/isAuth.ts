import { MiddlewareFn } from 'type-graphql/dist/interfaces';
import { MyContext } from '../interface/MyContext';
import { verify } from 'jsonwebtoken';
import { Payload } from '../interface/Payload';

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
	const authorization = context.req.headers['authorization'];
	context.req.headers;
	if (!authorization) {
		throw new Error('not authenticatied');
	}

	try {
		const token = authorization.split(' ')[1];

		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!) as Payload;
		context.payload = payload;
	} catch (err) {
		console.log(err);
	}

	return next();
};

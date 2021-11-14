import { Request, Response } from 'express';
import { Payload } from './Payload';

export interface MyContext {
	req: Request;
	res: Response;
	payload?: Payload;
}

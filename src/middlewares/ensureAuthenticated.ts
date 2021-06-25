import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //GET TOKEN
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "539472bbb5f04b75f864d090b51e280b") as IPayload;

    request.user_id = sub;

    return next();

  } catch (err) {
    return response.status(401).end();
  }


}
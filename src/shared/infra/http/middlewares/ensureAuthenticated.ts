import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../../../../modules/accounts/infra/prisma/repositories/UserRepository';

interface IPayload {
  id: number
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {

  const { authorization } = request.headers;

  if(!authorization) {
    throw new Error('Token missing');
  }

  const token = authorization.split(' ')[1];

  try {
   
    const { id } = verify(token, process.env.JWT_PASS ?? '') as IPayload;

    console.log(id);

    const userRepository = new UserRepository();

    const user = await userRepository.findById(id.toString());

    if(!user) {
      throw new Error('User not exists');
    }

    request.user = {
      id: id.toString()
    };
    next();
  } catch {
    return response.status(401).json({error: 'Invalid token!'});
  }
}
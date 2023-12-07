import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const {name, password, email} = request.body;
  
      const createUserUseCase = container.resolve(CreateUserUseCase);
  
      await createUserUseCase.execute({name, password, email});
  
      return response.sendStatus(201);
    } catch(err) {
      return response.status(400).json({error: err.message});
    }
  }
}

export { CreateUserController };
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllUsersUseCase } from './listAllUsersUseCase';

class ListAllUsersController {

  async handle(request: Request, response: Response): Promise<Response> {
    
    try{
      const listAllUsersUseCase = container.resolve(ListAllUsersUseCase);
  
      const users = await listAllUsersUseCase.execute();
  
      return response.status(200).json(users);
    } catch(err) {
      return response.status(400).json({error: err.message});
    }
  }
}

export { ListAllUsersController };
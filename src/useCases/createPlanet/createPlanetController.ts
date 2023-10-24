import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePlanetUseCase } from './createPlanetUseCase';


class CreatePlanetController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const {name, weather, terrain} = request.body;
  
      const createPlanetUseCase = container.resolve(CreatePlanetUseCase);
  
      await createPlanetUseCase.execute({ name, weather, terrain });
      
      return response.sendStatus(201);
      
    } catch (err) {
      return response.status(400).json({error: err.message});
      
    }
  }
}

export { CreatePlanetController };
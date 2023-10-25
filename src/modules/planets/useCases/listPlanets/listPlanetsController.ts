import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPlanetsUseCase } from './listPlanetsUseCase';

class ListPlanetsController {

  async handle (request: Request, response: Response): Promise<Response> {

    const listPlanetUseCase = await container.resolve(ListPlanetsUseCase);
    
    const planets = await listPlanetUseCase.execute();

    return response.status(201).json(planets);
  }

}

export { ListPlanetsController };
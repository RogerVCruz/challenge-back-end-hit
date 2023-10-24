import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPlanetByIdUseCase } from './listPlanetByIdUseCase';


class ListPlanetByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    try {
      const listPlanetUseCase = container.resolve(ListPlanetByIdUseCase);
      
      const planet = await listPlanetUseCase.execute(id);

      return response.status(200).json(planet);

    } catch(err) {
      return response.status(400).json({ error: err.message });

    }
  }
}

export { ListPlanetByIdController };
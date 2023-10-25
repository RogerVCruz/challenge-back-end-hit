import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPlanetByNameUseCase } from './listPlanetByNameUseCase';


class ListPlanetByNameController {

  async handle (request: Request, response: Response): Promise<Response> {
    
    try {
      const { name } = request.body;
      
      const listPlanetByNameUseCase = container.resolve(ListPlanetByNameUseCase);

      const planet = await listPlanetByNameUseCase.execute(name);
      
      return response.status(200).json(planet);

    } catch (err) {
      return response.status(400).json({ erorr: err.message });
      
    }
  }
}

export { ListPlanetByNameController };
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeletePlanetUseCase } from './deletePlanetUseCase';


class DeletePlanetController {

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const {id} = request.body;
  
      const deletePlanetUseCase = container.resolve(DeletePlanetUseCase);
  
      if (id) {
        await deletePlanetUseCase.execute(id);
      }
  
      return response.sendStatus(200);
    } catch(err) {
      return response.status(400).json({error: err.message});
    }
  }
}

export { DeletePlanetController };
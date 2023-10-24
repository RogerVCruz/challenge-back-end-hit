import { Router } from 'express';
import { CreatePlanetController } from '../useCases/createPlanet/createPlanetController';
import { ListPlanetsController } from '../useCases/listPlanets/listPlanetsController';
import { ListPlanetByNameController } from '../useCases/listPlanetByName/listPlanetByNameController';
import { ListPlanetByIdController } from '../useCases/listPlanetById/listPlanetByIdController';
import { DeletePlanetController } from '../useCases/removePlanet/deletePlanetController';

const planetsRoutes = Router();

const createPlanetController = new CreatePlanetController();
const listPlanetsController = new ListPlanetsController();
const listPlanetByNameController = new ListPlanetByNameController();
const listPlanetByIdController = new ListPlanetByIdController;
const deletePlanetController = new DeletePlanetController();

planetsRoutes.post('/', createPlanetController.handle);
planetsRoutes.get('/', listPlanetsController.handle);
planetsRoutes.get('/name', listPlanetByNameController.handle);
planetsRoutes.get('/id', listPlanetByIdController.handle);
planetsRoutes.delete('/delete', deletePlanetController.handle);

export { planetsRoutes };
import { Router } from 'express';
import { CreatePlanetController } from '../../../../modules/planets/useCases/createPlanet/createPlanetController';
import { ListPlanetsController } from '../../../../modules/planets/useCases/listPlanets/listPlanetsController';
import { ListPlanetByNameController } from '../../../../modules/planets/useCases/listPlanetByName/listPlanetByNameController';
import { ListPlanetByIdController } from '../../../../modules/planets/useCases/listPlanetById/listPlanetByIdController';
import { DeletePlanetController } from '../../../../modules/planets/useCases/removePlanet/deletePlanetController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const planetsRoutes = Router();

const createPlanetController = new CreatePlanetController();
const listPlanetsController = new ListPlanetsController();
const listPlanetByNameController = new ListPlanetByNameController();
const listPlanetByIdController = new ListPlanetByIdController();
const deletePlanetController = new DeletePlanetController();

planetsRoutes.post('/', ensureAuthenticated, createPlanetController.handle);
planetsRoutes.get('/', listPlanetsController.handle);
planetsRoutes.get('/name', listPlanetByNameController.handle);
planetsRoutes.get('/id', listPlanetByIdController.handle);
planetsRoutes.delete('/delete', ensureAuthenticated, deletePlanetController.handle);

export { planetsRoutes };
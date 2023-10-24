import { Router } from 'express';
import { planetsRoutes } from './planets.routes';

const router = Router();

router.use('/planets', planetsRoutes);

export { router };

import { Router } from 'express';
import { planetsRoutes } from './planets.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use('/planets', planetsRoutes);
router.use('/users', usersRoutes);
router.use('/sessions', authenticateRoutes);

export { router };

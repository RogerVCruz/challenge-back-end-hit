import { container } from 'tsyringe';

import { IPlanetRepository } from '../../modules/planets/infra/prisma/repositories/IPlanetRepository';
import { PlanetRepository } from '../../modules/planets/infra/prisma/repositories/PlanetRepository';
import { IStarWarsDB } from '../../providers/starwarsdb/IStarWarsDB';
import { StarWarsDB } from '../../providers/starwarsdb/implementations/StarWarsDB';


container.registerSingleton<IPlanetRepository>(
  'PlanetRepository',
  PlanetRepository
);

container.registerSingleton<IStarWarsDB>(
  'StarWarsDB',
  StarWarsDB
);
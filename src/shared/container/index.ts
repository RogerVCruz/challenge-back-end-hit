import { container } from 'tsyringe';

import { IPlanetRepository } from '../../repository/IPlanetRepository';
import { PlanetRepository } from '../../repository/implementations/PlanetRepository';
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
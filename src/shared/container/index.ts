import { container } from 'tsyringe';

import { IPlanetRepository } from '../../modules/planets/infra/prisma/repositories/IPlanetRepository';
import { PlanetRepository } from '../../modules/planets/infra/prisma/repositories/PlanetRepository';
import { IStarWarsDB } from '../../providers/starwarsdb/IStarWarsDB';
import { StarWarsDB } from '../../providers/starwarsdb/implementations/StarWarsDB';
import { IUserRepository } from '../../modules/accounts/infra/prisma/repositories/IUserRepository';
import { UserRepository } from '../../modules/accounts/infra/prisma/repositories/UserRepository';


container.registerSingleton<IPlanetRepository>(
  'PlanetRepository',
  PlanetRepository
);

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);

container.registerSingleton<IStarWarsDB>(
  'StarWarsDB',
  StarWarsDB
);
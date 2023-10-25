import { inject, injectable } from 'tsyringe';

import { Planet } from '../../infra/prisma/entities/Planet';
import { IPlanetRepository } from '../../repository/IPlanetRepository';
import { IStarWarsDB } from '../../../../providers/starwarsdb/IStarWarsDB';

@injectable()
class ListPlanetByNameUseCase {

  constructor(
    @inject('PlanetRepository')
    private planetRepository: IPlanetRepository,
    @inject('StarWarsDB')
    private starWarsDB: IStarWarsDB,
  ) {}

  async execute (name: string): Promise<Planet | null> {

    const planet = await this.planetRepository.findByName(name);

    if (!planet) {
      throw new Error('Planet not found!');
    }

    const planetApparitions = await this.starWarsDB.getPlanetApparitions(name);

    planet.apparitions = planetApparitions;

    return planet;
  }
}

export { ListPlanetByNameUseCase };


import { inject, injectable } from 'tsyringe';


import { IPlanetRepository } from '../../infra/prisma/repositories/IPlanetRepository';
import { Planet } from '@prisma/client';
import { IStarWarsDB } from '../../../../providers/starwarsdb/IStarWarsDB';

@injectable()
class ListPlanetByIdUseCase {
  
  constructor (
    @inject('PlanetRepository')
    private readonly planetRepository: IPlanetRepository,
    @inject('StarWarsDB')
    private readonly starWarsDB: IStarWarsDB
  ) {}

  async execute(id: string): Promise<Planet | null> {

    const planet = await this.planetRepository.findById(id);

    if (!planet) {
      throw new Error('Planet not found');
    }

    const { name } = planet;

    if(name){
      const planetApparitions = await this.starWarsDB.getPlanetApparitions(name);

      planet.apparitions = planetApparitions;
    }
    

    return planet;     
  }
}

export { ListPlanetByIdUseCase };
import { inject, injectable } from 'tsyringe';

import { IPlanetCreateDTO } from '../../dtos/IPlanetCreateDTO';
import { IPlanetRepository } from '../../repository/IPlanetRepository';



@injectable()
class CreatePlanetUseCase {

  constructor(
    @inject('PlanetRepository') 
    private planetRepository: IPlanetRepository,
  ) {}

  async execute({
    name,
    weather,
    terrain,
  }: IPlanetCreateDTO): Promise<void> {
    const planetAlreadyExists = await this.planetRepository.findByName(name);

    if (planetAlreadyExists) {
      throw new Error('Planet already exists!');
    }

    await this.planetRepository.createPlanet({
      name, 
      weather, 
      terrain
    });
  }
}

export { CreatePlanetUseCase };

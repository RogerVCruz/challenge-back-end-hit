import { inject, injectable } from 'tsyringe';

import { IPlanetRepository } from '../../infra/prisma/repositories/IPlanetRepository';

@injectable()
class DeletePlanetUseCase {

  constructor(
    @inject('PlanetRepository')
    private planetRepository: IPlanetRepository
  ) {}

  async execute (id: string): Promise<void> {
    const planetExists = await this.planetRepository.findById(id);

    if (!planetExists) {
      throw new Error('Insert a valid Id');
    }

    await this.planetRepository.removePlanet(id);
  }
}

export { DeletePlanetUseCase };
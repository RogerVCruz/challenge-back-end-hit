import { inject, injectable } from 'tsyringe';

import { IPlanetRepository } from '../../infra/prisma/repositories/IPlanetRepository';

@injectable()
class DeletePlanetUseCase {

  constructor(
    @inject('PlanetRepository')
    private planetRepository: IPlanetRepository
  ) {}

  async execute (id: string): Promise<void> {
    if (!id) {
      throw new Error('Insert a valid Id or Name');
    }

    this.planetRepository.removePlanet(id);
  }
}

export { DeletePlanetUseCase };
import { Prisma } from '@prisma/client';
import { prisma } from '../../../../../shared/infra/Prisma/client';
import { IPlanetCreateDTO } from '../../../dtos/IPlanetCreateDTO';
import { Planet } from '../entities/Planet';
import { IPlanetRepository } from './IPlanetRepository';


class PlanetRepository implements IPlanetRepository {
  private repository: Prisma.PlanetDelegate;

  constructor() {
    this.repository = prisma.planet;
  }
 
  async findById(id: string): Promise<Planet | null> {
    const planet = await this.repository.findUnique({
      where: {
        id
      }
    });

    return planet;
  }

  async findByName(name: string): Promise<Planet | null> {
    const planet = await this.repository.findFirst({
      where: {
        name
      }
    });

    return planet;
  }

  async listPlanets(): Promise<Planet[]> {
    const planets = await this.repository.findMany();

    return planets;
  }

  async createPlanet({ name, weather, terrain }: IPlanetCreateDTO): Promise<void> {
    await this.repository.create({
      data: {
        name,
        weather,
        terrain,
      }
    });
  }

  async removePlanet(id: string): Promise<void> {

    await this.repository.delete({
      where: {
        id: id
      }
    });
  }
}

export { PlanetRepository };


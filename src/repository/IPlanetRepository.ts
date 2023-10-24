import { IPlanetCreateDTO } from '../dtos/IPlanetCreateDTO';
import { Planet } from '../entity/Planet';

interface IPlanetRepository {
  createPlanet(data: IPlanetCreateDTO): Promise<void>;
  removePlanet(data: string): Promise<void>;
  findById(id: string): Promise<Planet | null>
  findByName(name: string): Promise<Planet | null>;
  listPlanets(): Promise<Planet[]>;
}

export { IPlanetRepository };
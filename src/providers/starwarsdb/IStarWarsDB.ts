interface IStarWarsDB{
  getPlanetApparitions(planetName: string): Promise<number>;
}

export { IStarWarsDB };

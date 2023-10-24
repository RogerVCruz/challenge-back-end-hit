
import axios from 'axios';
import { IStarWarsDB } from '../IStarWarsDB';


class StarWarsDB implements IStarWarsDB {

  async getPlanetApparitions(planetName: string): Promise<number> {

    const url = `${process.env.BASE_URL}/planets/?search=${planetName}&format=json`;

    try {
      const planetApparitions = await axios
        .get(url)
        .then(response => response.data.results[0].films.length);
        
      return planetApparitions;
    } catch(e) {
      return 0;
    }

  }
}

export { StarWarsDB };

  
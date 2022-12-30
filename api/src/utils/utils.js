const axios = require('axios');
const { POKEMON_API } = process.env;
const { Types } = require('../db');

/**
 * pokemon api type return 
 * {
 *    count: number;
 *    next: 
 *    previous: 
 *    result: {
 *     id: number;
 *     name: string;
 *    }[]
 * }
 * 
 * TODO: falta validar datos y catchear errores
 */
const initTypeDatabase = async () => {
  const types = await axios.get(`${POKEMON_API}type`);

  for (const type of types.data.results) {
    const urlSplit = type.url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    await Types.create({ id, name: type.name });
  }
}

/**
 * pokemon api pokemon return 
 * {
 *    count: number;
 *    next: 
 *    previous: 
 *    result: {
 *     id: number;
 *     name: string;
 *    }[]
 * }
 */
const getPokemonsApi = async ({ limit, offset , withDetails }) => {
  let arrayPokemonsApi = [];

  // carga de pokeAPI -----------------------------------------
  await axios.get(`${POKEMON_API}/pokemon`, { params: { limit, offset } })
    .then(async (response) => {
      let arrayResultApi = response.data.results;
      let arrayPromises = [];
      arrayResultApi.map((p) => arrayPromises.push(axios.get(p.url)));
      // se obtiene uno por uno los datos de cada pokemon

      await Promise.all(arrayPromises)
        .then((pokemons) => {
          arrayPokemonsApi = pokemons.map((p) => {
            return {
              id: p.data.id,
              name: p.data.name,
              types: p.data.types.map((t) => {
                return {
                  name: t.type.name
                }
              })
            };  // return 
          }); // map
        })
        .catch((error) => {
          return error;
        });

      return arrayPokemonsApi;
    })
    .catch((error) => {
      return error;
    });
  // ------------------------------- end - carga de poke API
  return arrayPokemonsApi;
};

module.exports = {
  initTypeDatabase,
  getPokemonsApi
}
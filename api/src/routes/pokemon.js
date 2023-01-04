const { Router } = require('express');
const router = Router();
const utils = require('../utils/utils');
const { Pokemons } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

/**
 * GET /pokemons
 * 
 * req = {
 *    page_index: number;
 *    page_size: number;
 * }
 * 
 */
router.get('/', async (req, res) => {
  const query = req.query;
  const pageIndex = req.query.page_index ? Number(req.query.page_index) : 1;
  const pageSize = req.query.page_size ? Number(req.query.page_size) : 12;

  const pokemons = await utils.getPokemonsApi({ limit: pageSize, offset: (pageIndex - 1) * pageSize });

  return res.send(pokemons);
});

/**
 * GET /pokemons/{idPokemon}
 */
router.get('/:idPokemon', async (req, res) => {
  const idPokemon = req.params.idPokemon;

  const pokemon = await Pokemons.find({ where: { id: idPokemon } });

  return res.send(pokemon);
});

/**
 * POST /pokemons
 * body: {
 *     name: string
 *     lifetime: number
 *     attack: number
 *     speed: number
 *     height: number
 *     weight: number
 *     types: number[]
 * }
 */
router.post('/', async (req, res) => {
  const body = req.body;

  const pokemon = await Pokemons.create(body);

  return res.send(pokemon);
});


module.exports = router;
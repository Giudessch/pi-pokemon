const { Router } = require('express');
const router = Router();
const utils = require('../utils/utils');
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

/**
 * GET /pokemons?name="..."
 */

/**
 * POST /pokemons
 */


module.exports = router;
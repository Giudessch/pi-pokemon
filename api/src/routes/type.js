const { Router } = require('express');
const { Types } = require('../db.js');
const router = Router();

const utils = require('../utils/utils');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.get('/', async (req, res) => {

    const types = await Types.findAll();

    if (types.length === 0) {
        // Importamos datos de types de API Externa
        console.log('No hay datos en la base de datos local. Insertando desde la API Externa ...');
        await utils.initTypeDatabase();
        return res.send(await Types.findAll());
    }

    return res.send(types);
});

module.exports = router;
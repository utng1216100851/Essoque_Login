const express = require('express');
const router = express.Router();

const cancion = require('../controllers/album.controller');

router.get('/', cancion.getAlbumes);
router.post('/', cancion.createAlbum);
router.get('/:id', cancion.getAlbum);
router.put('/:id', cancion.editAlbum);
router.delete('/:id', cancion.deleteAlbum);

module.exports = router;
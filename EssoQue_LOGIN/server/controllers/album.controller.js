const Album = require('../models/album'); 
const albumCtrl = {};

albumCtrl.getAlbumes = async(req, res)=>{
       const albumess = await Album.find();
       res.json(albumes);
    };

    albumCtrl.createAlbum = async(req, res)=>{
    const album = new Album({
        nombre: req.body.nombre,
        fecha: req.body.fecha
    });
    await album.save();
    res.json({
        'status': 'Album saved'
    });
};

albumCtrl.getAlbum = async (req, res)=>{
    const album = await Album.findById(req.params.id);
    res.json(album);
};

albumCtrl.editAlbum = async(req, res)=>{
    const{id}=req.params;
    const album = {
        nombre: req.body.nombre,
        fecha: req.body.fecha
    };
    await Album.findByIdAndUpdate(id, {$set: album}, {new: true});
    res.json({status: 'Album Update'});
};

albumCtrl.deleteAlbum = async(req, res)=>{
    await Album.findByIdAndRemove(req.params.id);
    res.json({status: 'Album Delete'});
};

module.exports = albumCtrl;
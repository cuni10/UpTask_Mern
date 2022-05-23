import Usuario from "../models/Usuario.js";

const registrar = async (req,res)=>{

    const {email} = req.body;

    const usuarioExiste = Usuario.findOne({email : email});

    if (usuarioExiste) {

        const error = new Error('El email ya fue registrado.');

        return res.status(400).json({msg: error.message});
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioAlmacenado = await usuario.save();

        res.json(usuarioAlmacenado);
;
    } catch (error) {
        console.log(error);
    }
};

export {registrar};
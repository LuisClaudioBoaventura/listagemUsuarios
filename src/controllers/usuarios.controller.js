const Usuario = require('../models/usuario.model')

module.exports = {
    index(req, res) {
        res.json({ message: `Hello World` });
    },
    async create(req, res) {
        const { id_usuario,
            nome_usuario,
            email_usuario,
            cpf_usuario,
            tipo_usuario,
            senha_usuario,
            codigoRH_usuario,
            regional_usuario,
            status_usuario
        } = req.body;

        let data = {};

        let user = Usuario.findOne ([email_usuario]);
        if(!data){
            data = (id_usuario,
                nome_usuario,
                email_usuario,
                cpf_usuario,
                tipo_usuario,
                senha_usuario,
                codigoRH_usuario,
                regional_usuario,
                status_usuario
                )
            user = await Usuario.create(data)
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user)
        } 
    }
}
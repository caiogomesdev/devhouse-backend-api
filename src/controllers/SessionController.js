// Methods: index, show, update, store, destroy
/**
 * index: Quando queremos fazer a listagem de sessões
 * store: Quando queremos criar uma nova sessão
 * show: Quando queremos listar uma única sessão
 * update: Quando queremos alterar uma sessão
 * destroy: Quando queremos deletar uma sessão
 */

const User = require('../model/User')

class SessionController{

    async store(req,res){
        const {email} = req.body;

        try {
            let user = await User.findOne({email})

        if(!user){
            user = await User.create({email})            
        }
        return res.json(user)
            
        } catch (error) {
            return res.json({error})
        }
    }
}

module.exports = new SessionController()
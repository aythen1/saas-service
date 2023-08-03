import { loadedModels } from "../../database/connection/connectionDB.js";

    const  register = async (req, res, next) => {
        console.log('llega la ruta?')
    const {userName, password} = req.body;
        try {

        
    if(userName && password){
        
        
        const [user, isCreated] = await  loadedModels.UserModel.findOrCreate({where: {userName}, defaults:{userName, password} })
        isCreated ? res.json( {status: 200, message: 'usuario registrado correctamente', user}) : res.json( {status: 404, message: 'esta cuenta ya existe'})
        
    
    
    }else {
       userName ? res.json({status: 400, message: 'recuerde ingresar contraseña'}) : res.json({status: 400, message: 'recuerde ingresar username'})
    }
        }catch(err){
            next(err)
        }
    // if(user.userName && user.password){
    //     loadedModels.UserModel.findOrCreate({
    //         where: user,
    //         default: user
    //     })
    //     .then((userFind, created) => {
    //         if(!userFind) return {status: 404, message: 'esta cuenta ya existe', userFind}
    //         if(created) return {status: 200, message: 'usuario registrado correctamente', created}
    //     })
    //     .catch(err => {
    //         next(err)
    //     })
    // }else {
    //    return user.userName ? {status: 400, message: 'recuerde ingresar contraseña'} : {status: 400, message: 'recuerde ingresar username'}
    // }
    
    
}

export default register;
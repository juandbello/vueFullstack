import {connect} from "mongoose";

export const mongoConn = async () => {
    try{
        const db = await connect('mongodb+srv://juandavid:YJRSeyEcl1ykfyqF@cluster0.zfkadxx.mongodb.net/test');
        console.log('conexión OK con Mongo!', db.connection.name)
    }catch(e){
        console.log('Error de conexión', e);
        throw new Error('Error de conexión');
    }
}
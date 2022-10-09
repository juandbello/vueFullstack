import {Schema, model} from 'mongoose';

const commentSchema = new Schema({
    idCharacter: {
        type: String,
    },
    characterName: {
      type: String,
      required: [true, 'Nombre del Personaje Requerido']
    },
    personName: {
        type: String,
        required: [true, 'Nombre de la Persona Requerido'],
        trim: true
    },
    comment:{
        type: String,
        required: [true, 'Comentario Requerido'],
        trim: true
    },
})

export default model('Comment', commentSchema)
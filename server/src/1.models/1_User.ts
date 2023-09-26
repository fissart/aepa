import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    foto: String,
    rol: String,
    dateb: String,
    datee: String,
    celular: String,
    carrera: String,
    mencion: String,
    ciclo: String,
    sexo: String,
    dni: String,
    password: String,
    name: String,
    email: String,
    filosophy: String,
},{
    timestamps: true
});

export interface IUser extends Document {
    foto: string;
    rol: string;
    dateb: string,
    datee: string,
    celular: string,
    carrera: string,
    mencion: string,
    ciclo: string,
    sexo: string,
    dni: string,
    password: string;
    name: string;
    email: string;
    filosophy: string
}

export default model<IUser>('User', schema);
